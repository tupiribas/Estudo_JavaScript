const contatorA = require('./instanciaUnica')
const contatorB = require('./instanciaUnica')

// Novas instancias a partir de uma factory
const contatorC = require('./instanciaNova')()
const contatorD = require('./instanciaNova')()

contatorA.inc()
contatorA.inc()
console.log(contatorB.valor);

contatorC.inc()
contatorC.inc()
console.log(contatorD.valor, contatorC.valor);