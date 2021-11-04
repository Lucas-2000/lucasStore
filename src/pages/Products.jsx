import React from 'react'
import CardProducts from '../components/CardProducts'
import Header from '../components/Header'
import '../styles/products.scss'

const Products = () => {
    return (
        <div id="page-products">
            <Header />
            <div>
                <main className="main-content">
                    <CardProducts />
                </main>
            </div>
        </div>
    )
}

export default Products
