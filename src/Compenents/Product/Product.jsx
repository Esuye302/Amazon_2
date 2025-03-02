import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './product.module.css';

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                // console.log('res', res.data); // Log the response data
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    // console.log('pro', product);

    return (
        <div className={styles.products_container}>
            {
                product?.map((singleProduct) => (
                    <ProductCard key={singleProduct.id} {...singleProduct} showbtn={true}/>
                    
                ))
            }
        </div>
    );
};

export default Product;