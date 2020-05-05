import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { queryUser } from '../query/users.query'

export default function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()
    const { data, loading } = useQuery(queryUser)
    const users = data ? data.users : [];

    async function handleLogin(e) {
        e.preventDefault();

        let check = users.filter(user => {
            return user.email === email
        })

        if (check.length <= 1) {
            console.log(check)
            history.push('/dashboard')
        } else {
            alert(`Usuário não encontrado, cadastre-se`)
            setEmail('')
            setName('')
        }

    }

    return (

        <form onSubmit={handleLogin}>
            <h3>Login</h3>
            <div className="form-group">
                <label>Nome do Usuário</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Email de Acesso</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu e-mail de acesso"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Lembrar-me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Entrar</button>
            <Link to="/register">
                <FiLogIn />
                <p>Criar conta de acesso</p>
            </Link>
        </form>



    );
}