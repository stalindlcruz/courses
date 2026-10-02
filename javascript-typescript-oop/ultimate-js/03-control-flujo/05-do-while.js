// let i = 2

// while (i < 2) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// do {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// } while (i < 2);


let x = 10;

// el while no se ejecutara porque evalua en falso desde el principio
while (x < 5) {
    console.log('Dentro del while');
}

// el do ... while tambien evalua en falso, pero se ejecuta una ves antes de evaluar la condicion
do {
    console.log('Dentro del do ... while');
} while (x < 5);