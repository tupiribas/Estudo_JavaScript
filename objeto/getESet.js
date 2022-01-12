const sequencia = {
    _valor: 1, // convencao
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 100
sequencia.valor = -99
console.log(sequencia.valor, sequencia.valor);