import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Types } from "../../Utility/actionType";
const ProductCard = ({price,id,rating,title,image,description,flex,showbtn}) => {

  const [state, dispatch] = useContext(DataContext);

  //   console.log("state1", state);
  function addToCart() {
    dispatch({
      type: Types.ADD_TO_BASKET,
      items: { id, title, price, rating, image, description },
    });
  }

  return (
    <div className={`${styles.card_container} ${flex ? styles.product_fixed : ""}`} >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>

      <div>
        <h4>{title}</h4>
        {/* Display the description */}
        {description && flex && (
          <p className={styles.description}>{description}</p>
        )}
        <div className={styles.rating}>
          {/* rating */}
          <Rating precision={0.1} value={rating?.rate || 0} />

          {/* Count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price with format numerial */}
          <CurrencyFormat amount={price} />
        </div>
        {
          showbtn && (
            <button className={styles.btn} onClick={addToCart}>
              Add to cart
            </button>
          )
        }
      </div>
    </div>
  );
};

export default ProductCard;
