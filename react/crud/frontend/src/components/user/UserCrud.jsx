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

    // Limpar apenas o usuário
    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
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

    getUpdatedList(user) {
        // varificar se o usuário já foi acrecentado á lista
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}