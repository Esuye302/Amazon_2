import React from 'react'
import CarouselEffect from '../../Compenents/Carousel/CarouselEffect'
import Category from '../../Compenents/Category/Category'
import Product from '../../Compenents/Product/Product'
import LayOut from '../../Compenents/LayOut/LayOut'
const Landing = () => {
    return (
        <LayOut>
            <CarouselEffect />
            <Category />
            <Product />
        </LayOut>
    )
}

export default Landing