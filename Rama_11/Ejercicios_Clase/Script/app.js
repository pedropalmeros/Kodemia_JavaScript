/**
* Ejercicio 1.
* Realizar una funcion que tome como parametro un objeto
* y devuelva un array de arrays con la siguiente estructura
* [ [key, value], [key, value] ]
* makePairs( { a: 1, b: 2 } )
* => [ ['a', 1], ['b', 2]]
*
*
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*
* Se tiene que realizar 2 soluciones,
* 1 con Object.entries() y
*  Otra con .map()
*/

const makePairs = (inObj) => {
    return Object.entries(inObj);
}

console.log(makePairs({a:1,b:2}));

const makePairsMap = (inObj) =>{
    let keys = Object.keys(inObj);

    let dictionaryArray = keys.map((key)=>{
        return [key, inObj[key]];
    });
    return dictionaryArray;
}

console.log(makePairsMap({a:1,b:2}));

const makePairsMap1 = (inObj) =>{
    let dictionaryArray = Object.keys(inObj).map((key)=>{
        return [key, inObj[key]];
    });
    return dictionaryArray;
}

console.log(makePairsMap1({a:1,b:2}));


/*****************
 * Dado un objeto de salarios
* Crear una funcion que retorne una lista
* con los salarios ordenados de menor a mayor
* orderSalary( salarios)
* -> [4000, 5000, 7000]
hint -> Usar metodo de objetos y luego un metodo de array para ordenar
********************************/

const salarios = {
    salario1: 5000,
    salario2: 500,
    salario3: 1500,
}

const sortSalary = (inObj) => {
    let salaryArray = Object.values(inObj);
    return salaryArray.sort();
}

console.log(sortSalary(salarios));


/*******************
 * /**
* Dado un array de objetos koders
* Imprimir en consola, todos los nombres de cada koder
*
* Ferdinand Bracho tiene 30 años y es de la generación 2 y su primer modulo es python
* Jose Hernandez tiene 20 años y es de la generación0 20' y su primer modulo es nodeJs
* ....
*
*/
/**
* Del mismo array de koders
* Obtener la suma de todas las edades
*
*/

let koders = [
{
    nombre: 'Pancho Lopez',
    curso: 'Python',
    generacion: 6,
    edad: 20,
},
{
    nombre: 'Carmen Sánchez',
    curso: 'nodeJs',
    generacion: 19,
    edad: 35,
},
{
    nombre: 'Juan Gómez',
    curso: 'Fundamentos de programación',
    generacion: 15,
    edad: 28
},
{
    nombre: 'Felipe Cuevas',
    curso: 'Maquetado',
    generacion: 10,
    edad:45
},
{
    nombre: 'Gustavo Mercado',
    curso: 'Maquetado',
    generacion: 14,
    edad: 28
}
];


console.log('--------------------')
koders.forEach((innerObj)=>{
    console.log(`${innerObj.nombre} tiene ${innerObj.edad} años y es de la generacion ${innerObj.generacion} y su primer módulo es ${innerObj.curso}`);
});

console.log('-------------------')

let sumaEdades = 0;
koders.forEach((innerObj)=>{
    sumaEdades += innerObj.edad;
})
console.log(`La suma de todas las edades es: ${sumaEdades}`)
console.log(`---------------------`)

/***********
 * * Del objeto library (dado mas adelante)
* 1. Obtener el numero de libros que se estan leyendo
* 2. Obtener una lista de todos los autores
* 3. Obtener una lista de todos los Libros
*
*/
let library = [
 {
     author: 'Bill Gates',
     title: 'The Road Ahead',
     readingStatus: true
 },
 {
     author: 'Steve Jobs',
     title: 'Walter Isaacson',
     readingStatus: true
 },
 {
     author: 'Suzanne Collins',
     title:  'Mockingjay: The Final Book of The Hunger Games',
     readingStatus: false
 }
]

let readingNumbersBook = 0
library.forEach((innerObj)=>{
    if(innerObj.readingStatus==true){
        readingNumbersBook++;
    }
});
console.log(`ctualmente estás leyendo ${readingNumbersBook}`);

let autores = library.map((innerObj)=>{
    return innerObj.author;
});
console.log(`Los autores de los librosson ${autores}`);

let libros = library.map((innerObj)=>{
    return innerObj.title;
});
console.log(`Los autores de los librosson ${libros}`);

/***************************************
 *  Métodos definidos por el usuario
 * ***************************************/

 let player1 = {
    name:'Conan'
    vidas: 5,
    energy: 10,

    updateVidas: function (){
        if(energy <= 0){
            this.vidas-=1;
        }
    }

    describe: function(){
        console.log(`${this.name} | ${this.vidas} | ${this.energy}`);

    }
 }

 let player2 = {...player1}
 player2.energy = 50;
 player2.name = 'Goku';

 console.log(`Player1 recibe kame kame haaaa (-25pts)`);
 player1.vidas -= 25;
 player1.describe();
 player1.updateVidas();
 



