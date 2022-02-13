const fs = require('fs');
const path = require('path');

const caminhoArquivo = __dirname + '/texto.txt'

function getConteudoDoArquivo(caminhoDoArquivo) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(caminhoDoArquivo, 'utf-8', (err, data) => {
                resolve(data)
            })
        } catch (error) {
            reject(error)
        }
    })
}

getConteudoDoArquivo(caminhoArquivo).
    then((conteudo) => console.log(conteudo)).
    catch((error) => console.log(error))
