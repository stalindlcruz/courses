/* 

* Crear un algoritmo que devuelva el precio
del producto mas el impuesto.

*/


function precioCompleto(precio, impuesto) {
    return precio + impuesto
}

const resultado = precioCompleto(19.90, 0.15);

console.log(resultado);