// Arrow Function
const soma = (a = 0, b = 0) => {
    return a + b
}
console.log(soma(3, 2));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
lexico1()

// Parâmetro default
function mostrar(texto = 'Node') {
    console.log(texto);
}
mostrar()
mostrar('Tupi')

// Operador rest (agrupar)
function somatorio(...numeros) {
    let total = 0
    numeros.forEach(n => total += n);
    return total
}
console.log(somatorio(1, 2, 3, 4, 5));