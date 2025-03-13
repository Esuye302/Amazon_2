import React, { useEffect, useState } from 'react'
import LayOut from '../../Compenents/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './result.module.css'
import { baseUrl } from '../../Api/endPoint'
import ProductCard from '../../Compenents/Product/ProductCard'
import Loader from '../../Compenents/Loader/Loader'
const Results = () => {
    const { CategoryName } = useParams()
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    // console.log('result', result)
    useEffect(() => {
        setLoading(true)
        axios
          .get(`${baseUrl}/products/category/${CategoryName}`)
          //https://fakestoreapi.com/products/category/electronics
          .then((res) => {
            setResult(res.data);
            setLoading(false);
            // console.log('from res', res);
          })
          .catch((err) => {
            console.error("Error fetching data:", err);
            setLoading(false);
          });
    }, [CategoryName]);

    return (
        <LayOut>
            {loading ? (<Loader />) : (

                <section>

                    <h1 style={{ padding: "30px" }}>Results</h1>
                    <p style={{ padding: "30px" }}>Category / {CategoryName}</p>
                    <hr />
                    <div className={styles.product_container}>
                        {result?.map((product) => (

                            <ProductCard key={product.id} {...product} showbtn={true}/>

                        ))}
                    </div>
                </section>
            )}

        </LayOut>
    )
}

export default Results