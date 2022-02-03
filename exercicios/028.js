function filtrarPorQuantidadeDeDigitos(conjuntoDeNumeros = [], qntDigitos = 0) {
    return conjuntoDeNumeros.filter(x => x.toString().length == qntDigitos)
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 3));
