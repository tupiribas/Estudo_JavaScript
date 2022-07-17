import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome,
        tempoAlteracao: 0
    }

    setTipo (e) {
        this.setState({
            tipo: e.target.value,
        })
    }

    setNome (e) {
        this.setState({
            nome: e.target.value
        })
    }

    render() {
        const { tipo, nome, tempoAlteracao } = this.state
        return (
            <div>
                <h1>{tipo}, {nome}!</h1>
                <hr />
                <input type="text" placeholder="Bom..." 
                    value={tipo} onChange={ e => this.setTipo(e) } 
                />
                <input type="text" placeholder="Nome da pessoa..." 
                    value={nome} onChange={ e => this.setNome(e) } 
                />
            </div>
        )
    }
}