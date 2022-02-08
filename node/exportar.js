console.log(module.exports); // começa vazio
console.log(module.exports === this);   
console.log(module.exports === exports);

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

module.exports = {
    nome: "Tupi",
    publico: true
}

console.log(module.exports);

/**
 * Module.exports aponta para this, exports e module.exports.
 * Será retornado o que estiver dentro de module.exports
 */