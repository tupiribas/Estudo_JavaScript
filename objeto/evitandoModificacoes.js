// Object.proventExtension // Não consegue adicioanr atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 22.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'Papola'
produto.descricao = 'vixxxxx'
delete produto.tag
console.log(produto);

// Object.seal // não consegeue adicionar e excluir atributos
const pessoa = Object.seal({ 
    nome: 'Julia', 
    idade: 13 
})
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.divida = 'Arroz'
pessoa.idade = 11
delete pessoa.idade

console.log(pessoa);

// Object.freeze = selado + valores constantes

const automovel = Object.freeze({
    tipo: 'Luxo',
    anos: 12
})

console.log('Congelado: ', Object.isFrozen(automovel));
automovel.anos = 'vai'
console.log(automovel);