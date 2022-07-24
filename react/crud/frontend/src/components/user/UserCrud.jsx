import React, { Component } from "react";
import axius from 'axios'

import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    // Renderizar os dados cadastrais na lista de estado
    // componentWillMount() {
    //     axius(baseUrl).then(resp => {
    //         this.setState({ list: resp.data })
    //     })
    // }
    // Renderizar os dados cadastrais na lista de estado
    async componentDidMount() {
        axius(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    // Limpar apenas o usuário
    async clear() {
        this.setState({ user: initialState.user })
    }

    async save() {
        const user = this.state.user
        // Esolha da requisição http que será feita
        const methodHTTP = user.id ? 'put' : 'post'
        // Incrementa a url de base com o id do usuário
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axius[methodHTTP](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list }) // Atualizar os dados
            })
    }

    async getUpdatedList(user) {
        // varificar se o usuário já foi acrecentado á lista
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    async updateField(event) {
        /**
         * Filosofia para alterar o estado de um componente:
         * Clonar os dados antes e atualizar depois.
         */
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // Renderizar a parte visual do formulário
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>    
                </div> 
                
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-primary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}