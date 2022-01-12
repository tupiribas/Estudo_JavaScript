// Cada objeto pode ser constante pois cada objeto tem seu endereço de memória

const pessoa = {
    nome: 'João'
}
console.log(pessoa);
Object.freeze(pessoa) // não permite fazer alterações nos dados do objetos

pessoa.nome = 'maria'
delete pessoa.nome
console.log(pessoa.nome); // João

const pessoaConstante = Object.freeze({
    nome: 'Tupi',
    idade: 19
})

console.log(pessoaConstante);

