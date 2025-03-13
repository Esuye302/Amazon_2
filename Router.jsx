import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./src/Pages/Landing/Landing";
import Cart from "./src/Pages/Cart/Cart";
import Orders from "./src/Pages/Orders/Orders";
import Results from "./src/Pages/Results/Results";
import ProductDetail from "./src/Pages/ProductDetail/ProductDetail";
import Payment from "./src/Pages/Payment/Payment";
import Auth from "./src/Pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51R114RGAleAGB5I4YXI0kTJ1pQKNzLuZTNUQHVcAe8Ni24xB9qNHlaMSBBYDmaeQgf8I3NG5PO4azp1UO2wqpNEK00iHVF1ryu"
);
import ProtectedRoute from "./src/Compenents/ProtectedRoute/ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/Payment"
          element={
            <ProtectedRoute msg={"You Must Have Log In"} redirect={"/Payment"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/auth" element={<Auth />} />

        <Route
          path="/orders"
          element={
            <ProtectedRoute msg={"You Must Have Log In to access the orders"} redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:CategoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
