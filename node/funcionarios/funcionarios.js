const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // Faz requisições de algo remoto

function filtrarMenorSalario(sexo = '', local = '') {
    const acharFuncChines = (func) => func.pais === local
    const acharFuncFeminina = (func) => func.genero === sexo.charAt(0).toLocaleUpperCase()
    const maiorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    axios.get(url).then(reposta => {
        const funcionarios = reposta.data
        const func = funcionarios.filter(acharFuncChines).filter(acharFuncFeminina).reduce(maiorSalario)
        console.log(func);
    })
}

//filtrarMenorSalario('f', 'Brazil')

const apiGov = 'https://api.brasil.io/v1/dataset/covid19//v1/dataset/covid19/caso_full/data/v1/dataset/covid19/caso_full/data/'

const getAnoDoArquivo = (ano) => ano.ano_arquivo === 2021

axios.get(apiGov).then(resposta => { 
    const blocos = resposta.data
    const obj = blocos
    //const anos = blocos.filter(getAnoDoArquivo)
    console.log(obj);
})
