const fs = require('fs') // modulo de leitura de arquivos 

const caminho = __dirname + '/arquivo.json'

// sincrono... (Não recomendada)
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo);

// assincrono... (Recomendado)
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

const config = require('./arquivo.json')
console.log(`Leitura require: ${config.db.host}:${config.db.port}, \nSenha:${config.db.pass}`);

// É usado para ler de forma assíncrona o conteúdo de um determinado diretório
fs.readdir(__dirname, (erro, conteudo) => {
    console.log("Conteudo da pasta...")
    console.log(conteudo);
});

