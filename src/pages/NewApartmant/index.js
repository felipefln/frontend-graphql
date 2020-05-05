import React, { useState } from 'react'
import './styles.css'

export default function NewApartmant() {
    const [add, setAdd] = useState(false)
    const [apartamento, setApartamento] = useState({
        apartmant: '',
        blc: '',
        residents: []
    })
    function handleAddResident() {
        return (
            <React.Fragment>
                <div class="form-row">
                    <div class="col">
                        <label for="nome">Nome</label>
                        <input type="text" class="form-control" placeholder="Nome" />
                    </div>
                    <div class="col">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" placeholder="E-mail" />
                    </div>
                </div>
                <div class="form-row" style={{ paddingTop: '10px' }}>
                    <div class="form-group col-md-4">
                        <label for="inputCity">Data de Nascimento</label>
                        <input type="date" class="form-control" id="dataBirthd" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Telefone</label>
                        <input type="phone" class="form-control" id="phone" placeholder="Telefone" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputZip">CPF</label>
                        <input type="text" class="form-control" id="cpf" placeholder="CPF" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
    console.log(apartamento)
    return (
        <React.Fragment>
            <div class="container-form">
                <div class="header-form">
                    <header><p>Novo <b>Apartamento</b></p></header>
                    <button type="button" class="btn btn-primary" onClick={() => setAdd(true)}>+ Morador</button>
                </div>
                <form>
                    <div class="form-group" style={{ width: '250px' }}>
                        <label for="apartmant">Apartamento</label>
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Numero do Apartamento"
                            value={apartamento.apartmant}
                            onChange={e => setApartamento({ apartmant: e.target.value })}
                        />
                    </div>
                    <div class="form-group" style={{ width: '250px' }}>
                        <label for="blc">Selecione o Bloco</label>
                        <select class="form-control" id="blc" value={apartamento.blc} onChange={e => setApartamento({ blc: e.target.value })}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <div class="title-residentes">
                        <h6>Residentes/Moradores</h6>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" placeholder="Nome" />
                        </div>
                        <div class="col">
                            <label for="email">E-mail</label>
                            <input type="email" class="form-control" placeholder="E-mail" />
                        </div>
                    </div>
                    <div class="form-row" style={{ paddingTop: '10px' }}>
                        <div class="form-group col-md-4">
                            <label for="dateBirthd">Data de Nascimento</label>
                            <input type="date" class="form-control" id="dataBirthd" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="phone">Telefone</label>
                            <input type="phone" class="form-control" id="phone" placeholder="Telefone" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="cpf">CPF</label>
                            <input type="text" class="form-control" id="cpf" placeholder="CPF" />
                        </div>
                    </div>
                    {
                        add && handleAddResident()
                    }
                    <button type="button" class="btn btn-success" onClick={() => { }}>Cadastrar</button>
                </form>
            </div>

        </React.Fragment>

    )
}