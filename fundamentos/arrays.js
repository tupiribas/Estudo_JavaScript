/**
 * NÃO É UMA BOA PRÁTICA COLOCAR VALORES HETEROGÊNIOS NOS ARRAYS!
 */

const valores = [1.3, 32.3, 433.4321, 21.00002];

console.log(valores[0], valores[3]); 
console.log(valores[4]); // UNDEFINE

valores[4] = 10; // atribui o valor 10 ao array de indice 4

console.log(valores[0], valores[4]); // retorna o valor em uma dada posição do array
console.log(valores.length); // retorna o valor do array

valores.push({id: 3}, false, null, 'teste'); // add multiplos valores
console.log(valores);

console.log(valores.pop()); // restorna o ultimo valor do array

delete valores[0]; // deleta um valor do array pelo índice
console.log(valores);

console.log(typeof valores); // tipo: Objeto

// Closure
const x = "Global"

function casa() {
    const x = "Local"
    function quarto() {
       return x
    }

    return quarto()
}

console.log("\n" + casa());