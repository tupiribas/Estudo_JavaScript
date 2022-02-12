// Exemplo de utilização COM PROMISE...
const http = require('http');
const { get } = require('lodash');

const getTurma = (letra = '') => {
    return new Promise((resolve, reject) => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra.toLocaleUpperCase()}.json`

        http.get(url, resp => {
            let resultado = ''

            resp.on('data', (dados) => {
                resultado += dados
            })

            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

// let nomesAlunos = []
// getTurma('a').then(a => {
//     nomesAlunos = nomesAlunos.concat(a.map(a => `A: ${a.nome}`))
//     console.log(nomesAlunos);
// })

// Sequencia de passos
Promise.all([getTurma('a'), getTurma('b'), getTurma('c')]).
    then(turmas => [].concat(...turmas)).
    then(aluno => aluno.map(a => a.nome)).
    then(nomes => console.log(nomes)).
    catch(erro => console.log(erro.message));
