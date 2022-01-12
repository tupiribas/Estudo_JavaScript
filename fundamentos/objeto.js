const prod1 = {}; // conjunto de chave e valor
prod1.id = 1
prod1.nome = 'Tupi Guedes Ribas'
prod1.preco = 1232.30
prod1['Desconto_Legal'] = 0.04; // evitar atrbutos com espaço

console.log(prod1);

// outra forma
const prod2 = {
    id: 1,
    nome: 'Sansung Galax S 5',
    preco: 2132.50,
    cliente: {
        id: 3,
        nome: 'Tupi Guedes Ribas',
        idade: 19,
        endereco: {
            rua: 'Anfilófio de Carvalho',
            bairro: 'Barbalho',
            cep: '123222-321'
        },

    },

}
console.log(prod2);