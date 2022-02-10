// let const
{
    var a = 2
    let b = 5
    console.log(b);
}
console.log(a);
// console.log(b); erro

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`);

// Destructing
const [l, e, ...tras] = 'Tupi'
console.log(l, e, tras);

const [x, y] = [1, 2]
console.log(x, y);

const { idade: i, nome } = { nome: 'Tupi', idade: 12}
console.log(nome, i);