import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks'
import { createUserMutation } from '../mutation/user.mutation'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [createUser] = useMutation(createUserMutation)
    const history = useHistory()


    async function handleCreate(e) {
        e.preventDefault();
        try {
            const response = await createUser({ variables: { name, email } })
            console.log(response)
            if (response.data.createUser.id) {
                alert(`Login criado`)
                history.push('/')

            } else {
                setName('')
                setEmail('')
                alert(`Falha no login tente novamente`)
            }

        } catch (err) {
            alert(`Falha no login tente novamente`)
        }

    }

    return (
        <form onSubmit={handleCreate}>
            <h3>Registro de Usuário</h3>

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
                <label>E-mail de Acesso</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Criar conta</button>
            <p className="forgot-password text-right">
                Já registrado <Link to="/">Acessar?</Link>
            </p>
        </form>
    );
}
