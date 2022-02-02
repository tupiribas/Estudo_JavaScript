function calculaMedia(args) {
    return args.reduce((arg, i) => arg + i) / args.length
}

console.log(calculaMedia([1, 2, 3, 4, 5]));