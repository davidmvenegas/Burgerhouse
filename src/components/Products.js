import React from 'react'
import ProductBox from './ProductBox'
import ProductImage1 from '../images/s1.png'
import ProductImage2 from '../images/s2.png'

function Products() {
    return (
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Discover our chef currated selection of burgers</p>
            <div className='a-container'>
                <ProductBox image={ProductImage1} title="Luger Burger" />
                <ProductBox image={ProductImage2} title="Le Pigeon Burger" />
                <ProductBox image={ProductImage1} title="Luger Burger" />
            </div>
        </div>
    )
}

export default Products
