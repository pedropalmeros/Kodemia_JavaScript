/***************************************************************************
PRACTICA

Dado el siguiente lleva a cabo las las operaciones indicadas

const player = {
 score: 88888,
 level: 7,
 lives: 2,
 vitalEnergy: 1,
 isAlive: true,
};
 
console.log(jugador);
 
 
// ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
// Realizar código para llevar a cabo las operaciones
 
// ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
// Realizar código para llevar a cabo las operaciones
 
// ! 3 Revisamos nuestro jugador
// Realizar código para llevar a cabo las operaciones
 
 
 
// ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
// Realizar código para llevar a cabo las operaciones
***************************************************************************/

const player = {
 score: 88888,
 level: 7,
 lives: 2,
 vitalEnergy: 1,
 isAlive: true,
};

console.log(`player status before critical punch | vitalEnergy: ${player.vitalEnergy}, isAlive: ${player.isAlive}, lives: ${player.lives}`);
console.log("1.- Jugador recibe golpe crítico (-25 de energía vital)");
player.vitalEnergy -= 25;
console.log(`player status after critical punch | vitalEnergy:${player.vitalEnergy}, isAlive: ${player.isAlive}, lives: ${player.lives}`);


console.log("2.- Si la energía vital del jugador es menor a 0 isAlive -> falso")
const updateAliveStatus = (gamer) => {
    if(gamer.vitalEnergy<=0){
        gamer.isAlive = false;

        console.log("You've died");

        gamer.vitalEnergy = 0;
    }
    else{
        gamer.isAlive = true;
    }
}
updateAliveStatus(player);
console.log(`Update the player data`)
console.log(`Player stauts after updating alive status | vitalEnergy:${player.vitalEnergy}, isAlive: ${player.isAlive}, lives: ${player.lives}`);

const isAnotherLive = (gamer) =>{
    if(gamer.lives>0){
        gamer.vitalEnergy = 100;
        updateAliveStatus(gamer);
        gamer.score = 0;
        gamer.lives-=1;

    }
};

isAnotherLive(player);
console.log(`Player stauts after updating alive status | vitalEnergy:${player.vitalEnergy}, isAlive: ${player.isAlive}, lives: ${player.lives}`);


 
/*********************************************************************************
 *      EJERCICIO 2
 * **********************************************************************************************
 * DADO EL SIGUIENTE OBJETO REALIZA LAS SIGUIENTES OPERACIONES. 
 * -> Un Log donde veamos la suma total de notas
 * -> Opcional un log donde veamos el promedio de las notas a dos decimales. 
 * *****************************************************************************/

 const grades = {
    first_test: 7.5,
    second_test: 10,
    third_test: 6,
 };


 const averageGrades = (notas) => {
    let sum = 0;
    let average = 0;
    for(note in grades){
        sum += grades[note];
    }
    average = sum/3;
    average = average.toFixed(2);
    return average;
 }

 console.log(`El promedio es: ${averageGrades(grades)}`);


 /************************************************************************
  * TAREA 1
  * Ejercicio 1 
Crea el objeto koder (con al menos 6 propiedades, al menos 1 debe ser otro objeto con 2 o 3 propiedades propias)
Luego imprimir en consola alguna oración que haga uso de algunas de esas propiedades, accedemos a ellas, incluida la del objeto anidado
Luego en otro console log, imprime todas las llaves dentro del objeto
Luego en otra console log, imprime todas los valores dentro del objeto
En otro console log imprime cuántos elementos tiene el objeto -> hint: utilizamos un contador
**********************************************************************************/
let Koder = {
    alumno:{
        nombre: 'Juan',
        apellido: 'Pérez',
        celular: '559184718541'
    },
    eMail:'juan@gmail.com',
    levelHTML: 5,
    levelJavaScript: 4,
    inasistencias: 7,
    actualModule: 'JavaScript',
};

console.log(`Nombre completo del Koder ${Koder.alumno.nombre} ${Koder.alumno.apellido}`);


let countProperty = 0;
for(property in Koder){
    console.log(Koder[property])
    countProperty++;
}

console.log(`El objeto Koder tiene ${countProperty} atributos`)



/****************************************************************************
 * TAREA 2
 * Dado un objeto inicial, hacer los siguientes puntos

1. Agregar el lenguaje 'Go' a la lista de lenguajes
2. Agregar fastApi en frameworks
3. Cambiar el nivel a 4
4. Eliminar la propiedad avatar
5. Agregar una nueva propiedad de edad y poner el valor de 30
6. Imprimir en consola todos los lenguajes  y frameworks dominados
7. Clonar el objeto en uno nuevo
8. Imprimir en consola el nuevo objeto

 
let koder = {
   languages: ["JavaScript", "Python", "SQL"],
   frameworks: ["django", "node", "flask"]
   isMentor: true,
   level: 3,
   avatar: "https://picsum.photos/200/300"
}
************************************************************/
let koder = {
   languages: ["JavaScript", "Python", "SQL"],
   frameworks: ["django", "node", "flask"],
   isMentor: true,
   level: 3,
   avatar: "https://picsum.photos/200/300"
}

console.log(koder.languages);
//1- Agregando Go a la lista de lenguages
koder.languages.push('Go');
console.log(koder.languages);
console.log('----------');

//2- Agregando fastApi
console.log(koder.frameworks);
koder.frameworks.push('fastApi');
console.log(koder.frameworks);
console.log('................');

//3. Cambiar el nivel a 4
koder.level = 4;

//5. Eliminar la propiedad avatar
console.log(koder);
delete koder.avatar;
console.log(koder);

//5. Agregar una nueva propiedad de edad y poner el valor de 30
koder.edad = 30;
console.log(koder);


//6. Imprimir en consola todos los lenguajes  y frameworks dominados
console.log(`languages: ${koder.languages} y frameworks: ${koder.frameworks}`);


//7. Clonar el objeto en uno nuevo

let koder02 = {...koder};


//8. Imprimir en consola el nuevo objeto
console.log(koder02);