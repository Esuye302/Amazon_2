import React from "react";
import styles from "./header.module.css";
import amazon_logo from "../../assets/images/amazon-logo-white.png";
import { SlLocationPin } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import flag from "../../assets/images/flag.png";
import shoppingCart from "../../assets/images/cart-icon.png";
import LowerContainer from "./LowerContainer";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
const Head = () => {
  const [{basket},dispatch] = useContext(DataContext);
  return (
    <section className={styles.fixed_header}>
      <div className={styles.amazon_header}>
        <div className={styles.amazon_header_left_section}>
          <div className={styles.amazon_logo_container}>
            <a href="/">
              <img src={amazon_logo} alt="amazon_logo" />
            </a>
          </div>
 

          <div className={styles.location}>
            <span>
              <SlLocationPin className={styles.location_icon} size={25} />
            </span>
            <div>
              <p className={styles.deliver_to}>Deliver to</p>
              <p className={styles.ethio}>Ethiopia</p>
            </div>
          </div>
        </div>

        <div className={styles.amazon_header_middle_section}>
          <div className={styles.search_container}>
            <select className={styles.category_select}>
              <option value="">All</option>
            </select>
            <input
              type="text"
              className={styles.search_bar}
              placeholder="Search Amazon"
            />
            <button className={styles.search_button}>
              <CiSearch className={styles.search_icon} />
            </button>
          </div>
        </div>

        <div className={styles.amazon_header_right_section}>
          <div className={styles.flag_container}>
            <img className={styles.us_flag} src={flag} alt="US Flag" />
            <select className={styles.language_select}>
              <option value="EN">EN</option>
            </select>
          </div>
          <div className={styles.account}>
            <Link to="/SignUp">
              <p>Hello, Sign in</p>
              <select className={styles.account_select}>
                <option>Account & Lists</option>
              </select>
            </Link>
          </div>
          <Link className={styles.orders_link} to="/orders">
            <p>Returns</p>
            <p>& Orders</p>
          </Link>

          <Link className={styles.cart_link} to="/cart">
            <img className={styles.cart_icon} src={shoppingCart} />
            <div className={styles.cart_quantity}>{basket.length}</div>
            <div className={styles.cart_text}>Cart</div>
          </Link>
        </div>
      </div>
      <LowerContainer />
    </section>
  );
};

export default Head;
