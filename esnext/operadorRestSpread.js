// operador ... rest(juntar)/spread(espalha)
// usa rest com parâmetro de função

// Usar spread com objeto 
const funcionario = { nome: 'Anna', salario: 12333.22 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

// Usar spread com array
const grupoA = [1, 2, 3, 4, 5]
const grupoFinal = ['outros fulanos anteriores', ...grupoA]
console.log(grupoFinal);

