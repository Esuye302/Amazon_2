import React from 'react'
import catagoryData from './catagoryData'
import CategoryCard from './CategoryCard'
import styles from './Category.module.css'
const Category = () => {
    return (
        <section className={styles.Category_container}>
            {
                catagoryData.map((infos,i) => ( 
                    <CategoryCard key={i} {...infos} />
                )
                )
            }
        </section>
    )
}

export default Category