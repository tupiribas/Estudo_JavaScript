let a = 7;
let b = 94;
console.log("ANTES:\nValor de a = ", a, "\nValor de b = ", b, "\n");

// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log("DEPOIS:\nValor de a = ", a, "\nValor de b = ", b);

