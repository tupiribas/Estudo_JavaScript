function simboloMais(quantidade) {
    return Array(quantidade).fill("+").join('')
}

function simboloMais2(quantidade) {
    return "+".repeat(quantidade)
}

console.log(simboloMais(10));
console.log(simboloMais2(10));