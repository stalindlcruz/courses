/* short-circuit */

/* Falso */
// false
// 0
// ''
// null
// undefined
// NaN


let nombre = 'Chanchito Feliz';
let username = nombre || 'Anonimo';

console.log(username);


function fn1() {
    console.log('Soy Funcion 1');
    return false
}

function fn2() {
    console.log('Soy Funcion 2');
    return true
}

let x = fn1() && fn2();