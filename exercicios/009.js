function repetir(valor, qntRepeticoes) {
    let repeticoes = []
    for (let i = 0; i < qntRepeticoes; i++) {
        repeticoes.push(valor)
    }
    return repeticoes
}

function repetir2(item, qntRepeticoes) {
    return Array(qntRepeticoes).fill(item)
}

console.log(repetir("7", 3));
console.log(repetir2(7, 3));