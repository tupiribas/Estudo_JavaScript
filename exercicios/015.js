function receberSomenteOsParesDeIndicesPares(array = []) {
    const resultado = array.filter((valor, indice) => {
        valor % 2 == 0 && indice % 2 == 0
    });
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([10, 2, 3, 12412, 2]));