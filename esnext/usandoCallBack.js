// Exemplo de utilização SEM PROMISE...
const http = require('http');

const getTurma = (letra = '', callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toLocaleUpperCase()}.json`

    http.get(url, resp => {
        let resultado = ''

        resp.on('data', (data) => {
            resultado += data
        })

        resp.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('a', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes);
        })
    })
})
