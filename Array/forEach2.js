Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i + 1, this)
    }
}

const aprovados = ['Vedel', 'Marcos', 'Marroni', 'Wesley']

aprovados.forEach2((nome, indice) => console.log(`${indice} - ${nome}`))

