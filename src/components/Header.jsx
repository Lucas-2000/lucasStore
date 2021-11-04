import React from 'react'
import '../styles/header.scss'

const Header = () => {
    return (
        <div id="component-header">
            <header>
                <h1>
                    Lucas Store
                </h1>
                <button>
                    Produtos
                </button>
                <button>
                    Carrinho
                </button>
                <button>
                    Checkout
                </button>
                <button>
                    Perfil
                </button>
            </header>
        </div>
    )
}

export default Header
