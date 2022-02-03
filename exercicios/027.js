function inverterChaveEValor(objeto = {}) {
    const chave = Object.keys(objeto)
    const valor = Object.values(objeto)
    return Object.fromEntries([valor, chave])
}

function inverter2(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
        .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverterChaveEValor({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }));
console.log(inverter2({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }));
