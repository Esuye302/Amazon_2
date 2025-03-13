import React, { useContext, useState } from "react";
import LayOut from "../../Compenents/LayOut/LayOut";
import style from "./payment.module.css";
import { DataContext } from "../../Compenents/DataProvider/DataProvider";
import ProductCard from "../../Compenents/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Compenents/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { SyncLoader } from "react-spinners";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../Utility/fireBase"; // Import Firestore instance
import { useNavigate } from "react-router-dom";
import { Types } from "../../Utility/actionType";

const Payment = () => {
  const [{ basket, user },dispatch] = useContext(DataContext);
    // console.log('user',user);
  const total = basket?.reduce((amount, item) => amount + item.amount, 0);
  const totalPrice = basket?.reduce(
    (amount, item) => amount + item.amount * item.price,
    0
  );

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [cardError, setCardError] = useState(null);
  const handleChange = (e) => {
    e?.error?.message ? setCardError(e.error.message) : setCardError("");
  };
  const [processing, setProcessing] = useState(false);
  const handlePaymnet = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);

      console.log("Sending request to backend...");

      const response = await axiosInstance.post(
        `/create/payment?total=${totalPrice * 100}`
      );

      console.log("Response from backend:", response.data); // Log response data

      const clientSecret = response.data?.clientSecret;

      if (!clientSecret) {
        console.log("Client secret not received!");
      }

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log("Payment successful:", paymentIntent);

    await setDoc(
      doc(collection(db, "users", user.uid, "orders"), paymentIntent.id),
      {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      }
    );

dispatch({ type: Types.EMPTY_BASKET });
      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new orders" } });
    } catch (err) {
      console.error("Payment error:", err.response?.data || err.message);
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      {/* header */}
      <div className={style.payment_header}>Checkout ({total}) items</div>
      <section className={style.payment}>
        {/* address */}
        <div className={style.flex}>
          <h3>Delivery Address</h3>
          <div>{user?.email}</div>
          <div>Ethiopia</div>
        </div>
        <hr />
        {/* product */}
        <div className={style.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard key={i} {...item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={style.flex}>
          <h3>Payment Methods</h3>
          <div className={style.payment_card_container}>
            <div className={style.paymnet_details}>
              <form action="" onSubmit={handlePaymnet}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={style.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p> Total Order</p> |
                      <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <SyncLoader size={8} color={"#fff"} />
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;
