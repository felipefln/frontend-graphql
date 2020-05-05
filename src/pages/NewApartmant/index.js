import React from 'react'
import './styles.css'

export default function NewApartmant() {
    return (
        <React.Fragment>
            <div class="container-form">
                <div class="header-form">
                    <header><p>Novo <b>Apartamento</b></p></header>
                </div>
                <form>
                    <div class="form-group" style={{ width: '250px' }}>
                        <label for="apartmant">Apartamento</label>
                        <input type="number" class="form-control" placeholder="Numero do Apartamento" />
                    </div>
                    <div class="form-group" style={{ width: '250px' }}>
                        <label for="exampleFormControlSelect1">Selecione o Bloco</label>
                        <select class="form-control" id="blc">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
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
                </form>
            </div>

        </React.Fragment>

    )
}