import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './src/Pages/Landing/Landing'
import Cart from './src/Pages/Cart/Cart'
import Orders from './src/Pages/Orders/Orders'
import Results from './src/Pages/Results/Results'
import SignUp from './src/Pages/Auth/SignUp'
import ProductDetail from './src/Pages/ProductDetail/ProductDetail'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:CategoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router