console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.revertaAgora = function () {
    return this.split('').reverse().join('');
}

console.log('Tupi Guedes Ribas'.revertaAgora());