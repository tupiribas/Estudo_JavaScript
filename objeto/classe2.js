class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Nenhuma') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(sobrenome, profissao, nivel = 0) {
        super(sobrenome, profissao) 
        this.nivel = nivel
    }
}

const pessoa1 = new Filho('Guedes')

console.log(pessoa1.sobrenome)