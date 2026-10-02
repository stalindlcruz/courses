const ahora = new Date();
console.log(ahora);

const miFecha = new Date('December 10 2010 21:00:00 GMT-0500')
console.log(miFecha);

console.log('datestring: ', miFecha.toDateString());
console.log('ISOstring: ', miFecha.toISOString());
console.log('timestring: ', miFecha.toTimeString());
