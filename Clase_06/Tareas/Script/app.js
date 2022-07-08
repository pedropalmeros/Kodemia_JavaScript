/*******************************************************************************
 *      TAREA 1 8/JULIO/2022
 *******************************************************************************/
/* 
 *Función que pida una palabra al usuario
 *Invierta la palabra
 *y la retorna, almacenamos ese retorno en una variable y al interpolamos en un alert usando template literals
 *reversedString('hola') -> 'aloh'
 */
/*
 function inverseString(inStr){
    sizeString = inStr.length;
    strReturn = '';
    for(let i = sizeString; i>= 1; i--){
        strReturn +=inStr[i-1];
    }
    return strReturn;
 }

 strTest = prompt('Introduce una palabra')
 strInversed = inverseString(strTest);

 alert(`La palabra invertida es: -> ${strInversed}  <-`);
 */

 /*********************************************************************************
  *                 EJERCICIO 02    - 08/Julio/2022
  *********************************************************************************/
  /*Ejercicio 2 ->
    Función que pida 3 numeros como parametro
    2 números obligatorios y 1 opcional con valor de 3
    Arroje la suma de esos 3 números
    Posibles resultados
    -> addThreeNumbers(3,4,5) -> 12
    -> addThreeNumbers(3,4) -> 10
    -> addThreeNumbers(3) -> 'Faltan datos'
    -> addThreeNumbers() -> 'Faltan datos'
***************************************************************************************/
/*

function addThreeNumbers(a,b,c=3){
    let resultado; 
    if(typeof a==='undefined' && typeof b === 'undefined'){
        resultado = 'Faltan datos';
    }
    else if(typeof a==='undefined' || typeof b === 'undefined'){
        resultado = 'Faltan datos';
    } 
    else{
        resultado = a+b+c;
    }

    return resultado;
}

console.log(addThreeNumbers(3,4,5));
console.log(addThreeNumbers(3,4) );
console.log(addThreeNumbers(3) );
console.log(addThreeNumbers() );


console.log(addThreeNumbers(1));

*/


 /*********************************************************************************
  *                 EJERCICIO 03    - 08/Julio/2022
  *********************************************************************************/
 /*
 Función que pida al usuario los grados Centigrados en su localidad
  Convertirlos a grados fahrenheit
  Retornar el valor y ese valor usarlo para
  Arrojar un alert con el resultado
  -> convertTemp(25) -> La temperatura es de 77 ºF
  -> convertTemp() -> 'Faltan datos'
***************************************************************************************/
/*
function celcius2Farenheit(inCels){
    let msg = '';
    if(typeof inCels === 'undefined'){
        msg = 'Faltan Datos'
    }
    else{
        msg = `La temperatura es de ${inCels*(9/5)+32} F`;
    }
    return msg;
}

console.log(celcius2Farenheit(25));
console.log(celcius2Farenheit());
*/

 /*********************************************************************************
  *                 EJERCICIO 04    - 08/Julio/2022
  *********************************************************************************/
 /*

Función que reciba una numero e imprima las tablas de ese numeri,
 validamos que ese numero este entre 1 y 10
***************************************************************************************/

/*
function inputValidator(userOpt){

	do{
		if(userOpt>=1 && userOpt<=10){
			return userOpt;
		}
		else{
			userOpt = Number(prompt(`El valor debe estar entre 1 y 10, INTRODUCE EL VALOR DE NUEVO: `))
		}
    }while(true);
}

function tablaMultiplicar(inVal){
    for(let i = 1; i<=10; i++){
        console.log(`${i} x ${inVal} = ${i*inVal}`);
    }
}

let valTest = Number(prompt('Introduce un número del 1 al 10: '));
tablaMultiplicar(inputValidator(valTest));
*/

 /*********************************************************************************
  *                 EJERCICIO 05    - 08/Julio/2022
  *********************************************************************************/
 /*
Función que reciba una numero e imprima las tablas de ese numeri,
 validamos que ese numero este entre 1 y 10
***************************************************************************************/
function suma1toN(N = 3){
	let suma = 0;
	for(let i = 1; i<=N; i++){
		suma+=i;
		console.log(`Sumando ${i}`);

	}
	console.log(`La suma total es: ${suma}`);
	return suma;
}

function sumaInputValidator(userOpt){
	do{
		if(userOpt<=100 && userOpt>=1){
			return userOpt;
		}
		else{
			userOpt = Number(prompt(`El valor debe estar entre 1 y 100, INTRODUCE EL VALOR DE NUEVO: `))
		}
	}while(true)
}

let a = sumaInputValidator(Number(prompt('Introduce un valor entre el 1 y 100: ')));
let b = suma1toN(a);
alert(`La sumatoria que hay de 1 al ${a} es ${b}`)
let c = suma1toN();
alert(`La sumatoria es: ${c}`);