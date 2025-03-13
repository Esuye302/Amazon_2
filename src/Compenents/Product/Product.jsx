import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
import { PulseLoader } from "react-spinners";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setLoading(false); // ✅ Move inside .then()
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // ✅ Ensure loading stops even if there's an error
      });
  }, []);

  return (
    <div className={styles.products_container}>
      {loading ? ( 
        <div className={styles.loader}>
          <PulseLoader color={"#f00"} loading={loading} size={20} />
        </div>
      ) : (
        product?.map((singleProduct) => (
          <ProductCard
            key={singleProduct.id}
            {...singleProduct}
            showbtn={true}
          />
        ))
      )}
    </div>
  );
};

export default Product;
