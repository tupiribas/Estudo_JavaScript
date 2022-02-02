function filtrarNumeros(array = []) {
    return array.filter(x => typeof x === "number" )
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));