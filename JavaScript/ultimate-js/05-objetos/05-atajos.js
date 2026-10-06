let objeto = {};
let objeto2 = new Object();

/*
new Array(); []
new String(); "" '' ``
new Number(); 1 2 
new Boolean(); true or false
*/

function Usuario() {
    this.name = 'chanchito feliz'
}

let user = new Usuario();
user.edad = 19;
user.name = ['chanchito'];

const s1 = '1 + 1';
const s2 = new String('1 + 1')  ;

console.log(eval(s1), eval(s2.valueOf()));