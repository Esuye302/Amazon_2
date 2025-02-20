import React from 'react'
import styles from './Header.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
const LowerContainer = () => {
    return (
        <div className={styles.lower_container}>
            <ul>
                <li>
                    <GiHamburgerMenu className={styles.humberger_menu} />
                    <span>All</span>
                </li>
                <li>Today's Deals</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <li>Sell</li>
            </ul>
        </div>
    )
}

export default LowerContainer