const peso1 = 1.0;
const peso2 = Number('2.0'); // muda o valor para tipo numérico

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.22;
const avaliacao2 = 22.20;

const total = avaliacao1 + avaliacao2;
const media = total / (peso1 + peso2);


// toFixed: arredondando o valor para duas casas decimais
console.log("Média geral:", media.toFixed(2));

// toString muda o tipo da variável para string
console.log("Valor escrito:", media.toString()); 

// toString(2) converte a variável para binário
console.log("Valor binário:", media.toString(2));

// typeof: mostra o tipo da variável
console.log("Tipo da variável 'media':", typeof media);
console.log("Tipo de Number:", typeof Number); // Função
