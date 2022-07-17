import React, { Component } from 'react'

import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0], // valor ou operação
    atual: 0 
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
        
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        console.log(operation);
    }

    addDigit(n) {
        // Caso já exista mais de um ponto na display
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        // Impede de o valor 0 fique á esquerda do digito adicionado
        const clearDisplay = this.state.displayValue === '0' 
            || this.state.clearDisplay
        // Verifica se é necessário limpar a tela
        const valorAtual = clearDisplay ? '' : this.state.displayValue 
        const displayValue = valorAtual + n

        // Adiciona valores
        this.setState({ displayValue, clearDisplay: false })

        // Caso não tenha ponto
        if (n !== '.') {
            const i = this.state.atual // Indice de alteração
            const novoValor = parseFloat(displayValue) // Transforma em ponto flutuante
            const values = [...this.state.values] // Clona os valores
            values[i] = novoValor // Altera o o valor a partir do indice
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className='calculadora'>
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}