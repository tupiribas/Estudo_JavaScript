// padrão de projeto: middlewere pattern (chain of responsabiliy)

const passo1 = (obj, next) => {
    obj.valor1 = 'midd1'
    next()
}

const passo2 = (obj, next) => {
    obj.valor2 = 'midd2'
    next()
}

// não chame o próximo passo
const passo3 = obj => obj.valor3 = 'midd3'

const exec = (obj, ...middleweres) => {
    const execPasso = indice => {
        middleweres && indice < middleweres.length &&
            middleweres[indice](obj, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const obj = {}
/**
 * passo1, passo2, passo3
 * passo2, passo1, passo3
 * passo2, passo3
 * passo3, passo2, passo1 -> só executa o passo 3, pois não tem o next()
 */
exec(obj, passo3, passo2, passo1)
console.log(obj);