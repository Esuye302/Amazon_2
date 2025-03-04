import React, { useContext } from "react";
import LayOut from "../../Compenents/LayOut/LayOut";
import { DataContext } from "../../Compenents/DataProvider/DataProvider";
import ProductCard from "../../Compenents/Product/ProductCard";
import CurrencyFormat from "../../Compenents/CurrencyFormat/CurrencyFormat";
import styles from "./cart.module.css";
import { Link } from "react-router-dom";
import { HiArrowCircleDown } from "react-icons/hi";
import { HiArrowCircleUp } from "react-icons/hi";
import { Types } from "../../Utility/actionType";
const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  // console.log("basket", basket);
  const total = basket?.reduce(
    (amount, item) => amount + item.price * item.amount, 0);
  const increment = (item) => {
    dispatch({
      type: Types.ADD_TO_BASKET,
      items: item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Types.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <h2>Opps! No item in Your Cart</h2>
          ) : (
            basket?.map(
              (item) => (
                // console.log("itemA", item),
                (
                  <section className={styles.cart_item} key={item.id}>
                    <ProductCard
                      key={item.id}
                      {...item}
                      flex={true}
                      showbtn={false}
                      amountBtn={true}
                    />

                    <div className={styles.cart_btn}>
                      <button onClick={() => increment(item)}>
                        <HiArrowCircleUp size={24} />
                      </button>
                      {item.amount}
                      <button onClick={() => decrement(item.id)}>
                        <HiArrowCircleDown size={24} />
                      </button>
                    </div>
                  </section>
                )
              )
            )
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order Contains a gift </small>
            </span>
            <Link to="./Payment">continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
