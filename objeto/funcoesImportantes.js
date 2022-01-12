const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(chave => { console.log(`${chave[0]} ${chave[1]}`); });

/*    const obj = {
        enumerable: true, // passiva a ser listada
        writable: false, // não poderá ser modificada
        value: '01/01/2002'
    }

    Object.defineProperties(pessoa, 'dataNascimento', obj)

//pessoa.dataNascimento = '21/10/2021'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));
*/

// Concatenação de objetos
const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 213
console.log(obj);

