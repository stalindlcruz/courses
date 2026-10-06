let user = {
    id: 1,
    name: 'chanchito feliz',
    age: 25
};


for (const prop in user) {
    console.log(prop, user[prop]);
}

const animales = ['chanchito', 'dragon', 'canguro'];

for (const indice in animales) {
    console.log(indice, animales[indice]);
}