import React, { useContext } from "react";
import LayOut from "../../Compenents/LayOut/LayOut";
import { DataContext } from "../../Compenents/DataProvider/DataProvider";
import ProductCard from "../../Compenents/Product/ProductCard";
import CurrencyFormat from "../../Compenents/CurrencyFormat/CurrencyFormat";
import styles  from "./cart.module.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
     console.log('basket',basket)
  const total = basket?.reduce((amount, item) => amount+ item.price*item.amount, 0);
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
                // console.log("item", item),
                (
                  <ProductCard
                    key={item.id}
                    {...item}
                    flex={true}
                    showbtn={false}
                  />
                )
              )
            )
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
            <p>Subtotal ({basket?.length} items)</p>
            <CurrencyFormat amount={total}/>
            </div>
            <span>
                <input type="checkbox" />
                <small>This order Contains a gift </small>
            </span>
            <Link to='./Payment'>
            continue to checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
