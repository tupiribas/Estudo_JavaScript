function segundoMaiorNumero(conjuntoDeNumeros = []) {
    const odemCrescente = conjuntoDeNumeros.sort((a, b) => a - b)
    return odemCrescente.reverse()[1] // facilitar na captura
}

console.log(segundoMaiorNumero([12, 16, 1, 5, 2131, 55, 22, 67, 33])); // 12