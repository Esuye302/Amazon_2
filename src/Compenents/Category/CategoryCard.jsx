import React from 'react'
import styles from './Category.module.css'
import { Link } from 'react-router-dom'
const CategoryCard = ({ title, imageUrl, name }) => {
    return (
        <div className={styles.categoryCard}>
            <Link to={`/category/${name}`}>
                <span>
                    <h2>{title}</h2>
                </span>
                <img src={imageUrl} alt={name} />

                <p>shop now</p>
            </Link>
        </div>
    )
}

export default CategoryCard