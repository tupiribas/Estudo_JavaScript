const estaEntre = (numero, numMinimo, numMaximo, inclusivo = false) => {
    if (!inclusivo) {
        if (numMinimo > numMaximo) {
            return numero < numMinimo && numero > numMaximo
        }
        return numero > numMinimo && numero < numMaximo
    }
    else {
        if (numMinimo > numMaximo) {
            return numero <= numMinimo && numero >= numMaximo
        }
        return numero >= numMinimo && numero <= numMaximo
    }
}
const estaEntre2 = (numero, numMinimo, numMaximo, inclusivo = false) => {
    return !inclusivo ? 
                numMinimo > numMaximo ? 
                    numero < numMinimo && numero > numMaximo : 
                    numero > numMinimo && numero < numMaximo :
                numMinimo > numMaximo ?
                    numero <= numMinimo && numero >= numMaximo :
                    numero >= numMinimo && numero <= numMaximo
}

console.log(estaEntre(3, 100, 3, true)); // true, pois 3 está entre 3 e 100
console.log(estaEntre2(3, 100, 3, true)); // true, pois 3 está entre 3 e 100
