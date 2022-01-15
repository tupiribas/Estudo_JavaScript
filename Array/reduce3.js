Array.prototype.reduce2 = function (callback, init) {
    let acumulador = this[0];
    if (init != undefined) {
        this.unshift(init)
        acumulador = this[0]
    }
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador;
}

const a = [true, true, false]
console.log(a.reduce2(function (acc, atual) {
    return `${acc} + ${atual} = ${acc || atual}`
    
}));