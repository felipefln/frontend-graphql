import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

// import api from '../../services/api'


export default function Login() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()

    // async function handleLogin(e) {
    //     e.preventDefault();

    //     const data = {
    //         author,
    //         email,
    //         password
    //     }

    //     try {
    //         const response = await api.post('login', data)

    //         if (response.data.accesstoken) {
    //             history.push('/todo')

    //         } else {
    //             setAuthor('')
    //             setEmail('')
    //             setPassword('')
    //             alert(`Falha no login tente novamente`)
    //         }

    //     } catch (err) {
    //         alert(`Falha no login tente novamente`)
    //     }

    // }

    return (

        <form>
            <h3>Login</h3>

            <div className="form-group">
                <label>Nome do Usuário</label>
                <input type="text" className="form-control" placeholder="Digite seu nome" />
            </div>

            <div className="form-group">
                <label>Email de Acesso</label>
                <input type="email" className="form-control" placeholder="Digite seu e-mail de acesso" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Lembrar-me</label>
                </div>
            </div>
            <Link to="/dashboard">
                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
            </Link>

            <Link to="/register">
                <FiLogIn />
                <p>Criar conta de acesso</p>
            </Link>
        </form>
    );
}