const ferrari = {
    modelo: 'F40',
    velMax: 320,
}

const volvo = {
    modelo: 'V20',
    velMax: 500,
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);

function MeuObjeto() {
}

console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, "\n",  MeuObjeto.prototype);