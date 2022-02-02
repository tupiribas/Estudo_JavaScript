function somarNumerosDoArray(numeros = [0]) {
    let t = 0
    for (let i = 0; i < numeros.length; i++) {
        t = t + numeros[i]
    }
    return t
}

function somarNumerosDoArray2(numeros = [0]) {
    if (numeros == 0) return 0
    let soma = 0
    numeros.forEach(num => soma += num)
    return soma
}

console.log(somarNumerosDoArray2([2, 2, 2, 2]));