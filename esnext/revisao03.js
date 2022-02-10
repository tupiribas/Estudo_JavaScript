// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Olá mundo'
    }
}

console.log(pessoa.ola(), pessoa.nome);

// Class
class Pessoa {}
class Animal extends Pessoa {}