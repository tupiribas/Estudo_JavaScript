class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const vai = new Pessoa("Tupi")
vai.falar()

function Pessoas(nome) {
    this.novoNome = nome

    this.falar = () => {
        return this.novoNome
    }
}

const p1 = new Pessoas("Tupizin")
console.log(p1.falar());