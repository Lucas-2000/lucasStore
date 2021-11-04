import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/register.scss'

const Register = () => {

    const handleRegister = () => {
        alert('Usuário cadastrado com sucesso')
    }

    return (
        <div id="page-register">
            <header>
                <h1>Crie seu usuario</h1>
                <p>Informe abaixo seus dados para criar seu login</p>
            </header>
            <main className="main-content">
                <form>
                    <div>
                        <input placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <input placeholder="Digite seu login" />
                    </div>
                    <div>
                        <input placeholder="Digite sua senha" />
                    </div>
                    <div>
                        < Link to="/">
                            <button type="submit" onClick={handleRegister}>Cadastrar</button>
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Register
