import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <form>
            <h3>Registro de Usuário</h3>

            <div className="form-group">
                <label>Nome do Usuário</label>
                <input type="text" className="form-control" placeholder="Digite seu nome" />
            </div>

            <div className="form-group">
                <label>E-mail de Acesso</label>
                <input type="email" className="form-control" placeholder="Digite seu e-mail" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Criar conta</button>
            <p className="forgot-password text-right">
                Já registrado <Link to="/">Acessar?</Link>
            </p>
        </form>
    );
}
