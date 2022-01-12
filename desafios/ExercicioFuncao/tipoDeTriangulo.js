/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação 
quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência 
de um triângulo).

*/

function tipoDeTriangulo(l1, l2, l3) {
    if (l1 === l2 && l1 === l3 && l2 === l3) {
        return 'Equilátero'
    }
    else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return 'Isósceles'
    }
    else if (l1 !== l2 && l1 !== l3 && l2 !== l3) {
        return 'Escaleno'
    }
}

console.log(tipoDeTriangulo(1, 2, 3));
console.log(tipoDeTriangulo(3, 1, 3));
console.log(tipoDeTriangulo(1, 1, 1));