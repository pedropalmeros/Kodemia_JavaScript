//let arrayMutipleData = ['hola', 34, 1+1, true, false, ()=>{}, {a: 1},['spiderman','batman','Goku']];
//console.log(arrayMutipleData[7][2]);
//
//let dragonBallZ = ['Goku','Gohan','Picolo','Roshi','Vegueta'];
//let lastWarrior = dragonBallZ.pop();
//console.log(lastWarrior);
//dragonBallZ.forEach((value,index)=>console.log({value,index}));



//let dragonBallZ = ['Goku','Gohan','Picolo','Roshi','Vegueta'];
//indexBegin = 1;
//element2Erase = 2;
//let reducedWarriors = dragonBallZ.splice(indexBegin,element2Erase);
//console.log('------Printing reducedWarriors');
//reducedWarriors.forEach((value,index)=>console.log({value,index}));
//
//console.log('------Printing dragonBallZ');
//dragonBallZ.forEach((value,index)=>console.log({value,index}));

let dragonBallZ = ['Goku','Gohan','Picolo','Roshi','Vegueta'];
let indexFound = dragonBallZ.indexOf('Picolo');
let indexNotFound = dragonBallZ.indexOf('Yamcha');

console.log(`Index of Picolo ${indexFound}`);
console.log(`Index of Yamcha ${indexNotFound}`);



