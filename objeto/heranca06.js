function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Curso em video01', 1)
const aula2 = new Aula('Curso em video02', 2)
console.log(aula1, aula2);

// simulando o new

function novo(f, ...param) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, param)
    return obj
}

const aula3 = novo(Aula, 'Aula boas vindas', 3)
const aula4 = novo(Aula, 'Aula good bye', 4)
console.log(aula3, aula4);
