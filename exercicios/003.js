const calcularSalarioLiquido = (qntHorasTrabalhadas = 0.0, valorPorHora = 0.0) => {
    const salarioBruto = qntHorasTrabalhadas * valorPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30 / 100
    return "Salário igual a R$".concat(salarioLiquido)
}

console.log(calcularSalarioLiquido(150, 40.5));
