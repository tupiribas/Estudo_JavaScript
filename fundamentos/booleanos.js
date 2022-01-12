let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //qualquer valor acima de 0 ou deferente de null, undefined, NaN
console.log(!!0);
console.log(!!null);
console.log(!!undefined);

// outros tipos
console.log("Final")
console.log(!!('' || null || NaN || 0 || ' as '));

let nomePessoa = 'Lucas';
console.log(nomePessoa || 'Desconhecido');