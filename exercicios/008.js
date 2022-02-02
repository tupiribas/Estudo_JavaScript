function multiplicacao(num1 = 0, num2 = 0) {
    if (num1 < 0 || num2 < 0) return 0

    let total = 0;
    for (let i = 0; i < num2; i++) {
        total += num1
    }
    return total 
}

console.log(multiplicacao(0, 5));