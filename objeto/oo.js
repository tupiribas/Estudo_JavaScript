// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = "Tela"
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 21324,
    proprietario: {
        nome: 'Raul',
        idade: 14,
        endereco: {
            lograduro: 'Rua ABC',
            numero: 12343123
        },
    },
    condutores:[{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 19,
    }],
    calcularValorDoSeguro: function() {

    }
}

carro.proprietario.endereco.numero = 10000

console.log(carro);

console.log(carro.status);
//console.log(carro.status.legal); // erro 
