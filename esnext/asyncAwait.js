const http = require('http');

function getTurma(letra = '') {
    return new Promise((resolve, reject) => {
        let resposta = ''
        const url = `http://files.cod3r.com.br/curso-js/turma${letra.toLocaleUpperCase()}.json`

        http.get(url, resp => {
            resp.on('data', (data) => {
                resposta += data
            })

            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resposta))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de Promises...
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('b')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto AsyncFunction

obterAlunos().
    then((alunos) => alunos.map(a => a.nome)).
    then((alunos) => console.log(alunos)).
    catch(erro => console.log(erro))