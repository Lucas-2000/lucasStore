import React, { useState } from 'react'
import '../styles/card.scss'

const CardProducts = () => {

    const handleAdd = () => {

        const answer = window.confirm("Adicionar ao carrinho?");
        if (answer) {
            window.alert("Produto adicionado ao carrinho")
        }
    }

    const products = [
        {
            id: 1, name: 'Teclado Gamer Alienware', category: 'Eletrônicos', description: 'Teclado gamer mecânico alienware low profile RGB AW510K', price: 'R$ 1129', image: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/input_devices/dell/keyboards/aw510k/gray/ng/keyboard-alienware-aw510k-campaign-hero-504x350-ng.psd?fmt=jpg'
        },
        {
            id: 2, name: 'Mouse HP USB 100 Preto', category: 'Eletrônicos', description: 'Mouse HP USB 100 Preto Sensor Óptico Ambidestro Resoluções até 1600 DPI Compatível com PC/Mac - 6VY96AA', price: 'R$ 36.12', image: 'https://m.media-amazon.com/images/I/51LFVxrXH7L._AC_SL1000_.jpg'
        },
        {
            id: 3, name: 'Placa de Vídeo RX 560-D', category: 'Eletrônicos', description: 'Placa de Vídeo Afox Radeon RX 560-D, 4GB GDDR5, 128Bit, AFRX560-4096D5H4-V2', price: 'R$ 1205.75', image: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-afox-radeon-rx-560-d-4gb-gddr5-128bit-afrx560-4096d5h4-v2_129275.jpg'
        },
    ]

    return (
        <div id="component-card">
            {products.map((product) => (
                <main className="main-content" key={product.id}>
                    <h1>{product.name}</h1>
                    <h6>{product.category}</h6>
                    <img src={product.image} alt="Produto a venda" />
                    <h4>{product.description}</h4>
                    <h5>{product.price}</h5>
                    <button type="submit" onClick={handleAdd}>+</button>
                </main>
            ))}
        </div>
    )
}

export default CardProducts
