import React from 'react'
import styles from './header.module.css'
import amazon_logo from '../../assets/images/amazon-logo-white.png'
import { MdLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import flag from '../../assets/images/flag.png';
import shoppingCart from '../../assets/images/cart-icon.png'
import LowerContainer from './LowerContainer';
const Head = () => {
    return (
        <>

            <div className={styles.amazon_header}>

                <div className={styles.amazon_header_left_section}>
                    <div className={styles.amazon_logo_container}>
                        <a href="">
                            <img src={amazon_logo} alt="amazon_logo" />
                        </a>
                    </div>


                    <div className={styles.location}>
                        <MdLocationOn className={styles.location_icon} />
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
                        <input type="text" className={styles.search_bar} placeholder='Search Amazon' />
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
                        <a href="account">
                            <p>Hello, Sign in</p>
                            <select className={styles.account_select}>
                                <option>Account & Lists</option>
                            </select>
                        </a>

                    </div>
                    <a className={styles.orders_link} href="/orders">
                        <p >Returns</p>
                        <p>& Orders</p>
                    </a>

                    <a className={styles.cart_link} href="/cart">
                        <img className={styles.cart_icon} src={shoppingCart} />
                        <div className={styles.cart_quantity}>3</div>
                        <div className={styles.cart_text}>Cart</div>
                    </a>
                </div>
            </div>
            <LowerContainer />
        </>
    )
}

export default Head