class Lancamento {
    constructor(nome = 'Sem nome', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => valorConsolidado += l.valor)
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 4200)
const constaDeLuz = new Lancamento('Conta de Luz', -230)

const conta = new CicloFinanceiro(6, 2022)
conta.addLancamentos(salario, constaDeLuz)
console.log(conta);
