import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'

const Home = () => {

    const handleLogin = () => {

    }

    return (
        <div id="page-home">
            <aside>
                <h1>Bem vindos a Lucas Store</h1>
                <p>O lugar perfeito para fazer suas compras</p>
            </aside>
            <main className="main-content">
                <form onSubmit={handleLogin}>
                    <p>Realize seu login</p>
                    <div>
                        <input placeholder="Digite seu email" />
                    </div>
                    <div>
                        <input placeholder="Digite sua senha" />
                    </div>
                    < Link to="/products">
                    <button
                        className="login-button"
                        type="submit">
                        Login
                    </button>
                    </Link>
                </form>
                <div>
                    <Link to="/register">
                    <button type="submit" className="register-button">Cadastrar</button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Home
