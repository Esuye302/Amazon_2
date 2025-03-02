import React from 'react'
import styles from './header.module.css'
import amazon_logo from '../../assets/images/amazon-logo-white.png'
import amazon_mobile_logo from '../../assets/images/amazon-mobile-logo-white.png'
import { IoMdSearch } from "react-icons/io";
import cart_icon from '../../assets/images/cart-icon.png'
const Header = () => {
    return (
        <div className={styles.amazon_header}>
            <div class={styles.amazon_header_left_section}>
                <a href="#" className={styles.header_link}>
                    <img class={styles.amazon_logo} src={amazon_logo} />
                    <img class={styles.amazon_mobile_logo} src={amazon_mobile_logo} />
                </a>
            </div>
            <div class={styles.amazon_header_middle_section}>
                <input class={styles.search_bar} type="text" placeholder="Search" />

                <button className={styles.search_button}>
                    <IoMdSearch className={styles.search_icon} />
                </button>
            </div>



            <div className={styles.amazon_header_right_section}>
                <a className={styles.orders_link } href="/orders">
                    <p >Returns</p>
                    <p>& Orders</p>
                </a>

                <a className={styles.cart_link} href="/cart">
                    <img className={styles.cart_icon} src={cart_icon} />
                    <div className={styles.cart_quantity}>3</div>
                    <div className={styles.cart_text}>Cart</div>
                </a>
            </div>

        </div>
    )
}

export default Header

