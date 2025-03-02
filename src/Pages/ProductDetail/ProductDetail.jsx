import React, { useEffect, useState } from 'react';
import LayOut from '../../Compenents/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Api/endPoint';
import ProductCard from '../../Compenents/Product/ProductCard';
import Loader from '../../Compenents/Loader/Loader';
const ProductDetail = () => {
    const [loading, setLoading] = useState(false)
    const { productId } = useParams();
    // console.log('id', productId)
    const [result, setResult] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios.get(`${baseUrl}/products/${productId}`)
            .then((res) => {
                // console.log('response', res)
                setResult(res.data);
                setLoading(false)
            })
            .catch((err) => {
                console.error('Error fetching product:', err);
                setLoading(false)
            })

    }, [productId]);

    return (
        <LayOut>
            {loading ? (<Loader />) :
                result ? (<ProductCard {...result} flex={true} showbtn={true}/>) :
                    (<h1 style={{ padding: "30px" }}>Loading...</h1>)}
        </LayOut>
    );
};

export default ProductDetail;