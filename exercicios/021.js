// Forma 1
function menorNumero1(array = []) {
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    return menor
}
//Forma 2
function menorNumero2(array = []) {
    return array.reduce((acumulador, numero) => {
        let menor = acumulador // valor inicial (array = [10])
        if (acumulador > numero) {
            menor = numero
        }
        return menor
    })
}

// Forma 3
function menorNumero3(array = []) {
    return array.reduce((acumulador, numero) => Math.min(acumulador, numero))
}

// Forma 4
function menorNumero4(array = []) {
    return Math.min(...array)
}

console.log(menorNumero1([10, 5, 35, 65]));
console.log(menorNumero2([10, 5, 35, 65]));
console.log(menorNumero3([5, -15, 50, 3]));
console.log(menorNumero4([5, -15, 50, 3]));