function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6, 9, 10, 15, 20);
console.log(resultado);
console.log(typeof suma);