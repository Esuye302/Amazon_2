import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Compenents/LayOut/LayOut";
import { DataContext } from "../../Compenents/DataProvider/DataProvider";
import { db } from "../../Utility/fireBase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
} from "firebase/firestore";
import styles from "./order.module.css";
import ProductCard from "../../Compenents/Product/ProductCard";

const Orders = () => {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return; // If no user is logged in, stop execution

    // 1️⃣ Reference to the user's `orders` collection inside Firestore
    const ordersCollectionRef = collection(db, "users", user.uid, "orders");

    // 2️⃣ Create a query to get orders sorted by "created" field in descending order
    const ordersQuery = query(ordersCollectionRef, orderBy("created", "desc"));

    // 3️⃣ Listen for real-time updates on the orders collection
    const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
      // 4️⃣ Map over each document and extract its data
      const fetchedOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      // 5️⃣ Store the orders in the state
      setOrders(fetchedOrders);
    });

    // 6️⃣ Cleanup function: Unsubscribe from Firestore when component unmounts
    return () => unsubscribe();
  }, [user]); // Run this effect whenever `user` changes

  return (
    <LayOut>
      <section>
        <div className={styles.container}>
          <div className={styles.orders_container}>
            <h2>Your orders</h2>
            {orders?.length==0&&(
              <div style={{padding:'20px'}}>You Don't have order Yet</div>
            )}
            <div>
            {
              orders?.map((eachOrder,i)=>{
                return (
                  <div key={i}>
                    <hr />
                    <p>Order Id: {eachOrder.id}</p>
                    {
                      eachOrder?.data?.basket?.map((order)=>{
                       return <ProductCard {...order} flex={true}/>
                      })
                    }
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
