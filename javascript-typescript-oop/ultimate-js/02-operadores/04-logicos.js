/* AND, OR, NOT */

// AND --> &&

// console.log(true && true); --> true
// console.log(false && true); --> false
// console.log(false && false); --> false

let mayor = false;
let suscrito = true;
console.log('operador AND -->', mayor && suscrito);


// OR --> ||
console.log('operador OR -->', mayor || suscrito);


// NOT --> !
console.log('operador NOT -->', !mayor);

let soloCatalogoInfantil = !mayor;
console.log(soloCatalogoInfantil);