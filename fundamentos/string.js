const escola = "Sesi";

console.log(escola.charAt(2)); // Retorna um o caracter da variável
console.log(escola.charCodeAt(2)); // mostra o valor da tabela unicode
console.log(escola.indexOf('S')); // verificando a existencia do carecter retornando 0 VERDADE ou 1 FALSO

console.log(escola.substring(1)); // mostra o caracter da direita para a esquerda a partir da posição
console.log(escola.substring(1, 3)); // mostra o caracter entre uma posição e outra

console.log('Escola '.concat(escola).concat("!")); // concatena valores
console.log(escola.replace(/\w/g, 'e')); // muda pela expressão regex ou pelo index

console.log('Ana, Maria, Joitamá'.split(/,/)[1]);