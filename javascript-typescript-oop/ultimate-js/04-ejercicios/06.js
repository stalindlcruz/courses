/* 

* Crear un algoritmo que devuelva la cantidad de numeros
positivos de un array.

*/

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let cantidad = 0;

    for (const element of arr) {
        if (element > 0) {
            cantidad++;
        }
    }
    return cantidad
}

let resultado = cuantosPositivos(array);

console.log(resultado);