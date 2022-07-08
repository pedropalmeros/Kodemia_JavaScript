//function esPar(a){
//	aNum = Number(a);
//
//	if(a%2===0)
//		console.log(`El numero ${aNum} es par`);
//	else
//		console.log(`El numero ${aNum} es impar`);
//
//}
//
//
//let a = 2, b = 7;
//
//esPar(a);
//esPar(b);
//
//
//function max(a,b,c){
//	let temp = 0;
//	if(a>temp){
//		temp = a;
//	}
//	else if(b > c){
//		temp = c;
//	}
//	else{
//		temp = d;
//	}
//
//	console.log(`El maximo es: ${temp}`);
//}


/************************************************
 * PRACTICA 01   - 07/JULIO/2022
// *************************************************/
//
// function sumaMultiplos(baseN){
//	let base = Number(baseN);
//	let suma = 0;
//
//	for(let i = 1; i<=100; i++){
//		if (i%base == 0){
//			console.log(`El número ${i} es múltiplo de ${base}`);
//			suma += i;
//		}
//
//	}
//	console.log(`La suma total es: ${suma}`);
//	return suma;
//}
//
//function validateOption(userOpt){
//	do{
//		if(userOpt==3 || userOpt==5 || userOpt == 7){
//			return userOpt;
//		}
//		else{
//			userOpt = Number(prompt(`El valor debe de ser 3, 5 o 7, INTRODUCE EL VALOR DE NUEVO: `))
//		}
//	}while(true)
//}
//
//let base = validateOption(Number(prompt('Introduce un 3, 5 o 7')))
//let sumatoria = sumaMultiplos(base);
//


/**************************************************************************
 * 		PRACTICA 02 - 7/JULIO/2022
 **************************************************************************/
/* OBJETIVO: Pedir al usuario 1 número entre 1 y 100,
 * ssumar todos los números entre el 1 y éste número
 * Mandar alert con el alert 
 * ***********************************************************************/

/*
function suma1toN(N){
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
*/

/**************************************************************************
 * 		PRACTICA 03 - 7/JULIO/2022
 **************************************************************************/
/* OBJETIVO: Pedir una oración al usuario, contar las letras a, e y espacios
 * ***********************************************************************/

function countSAE(sentence){
	sentence = sentence.toString();
	sentence = sentence.toLowerCase();
	let sumA=0;
	let sumE=0;
	let sumSpace=0;
	for(let i of sentence){
		switch(i){
			case 'a':
				sumA++;
				break;
			case 'e':
				sumE++;
				break;
			case ' ':
				sumSpace++;
				break;
			default:
				break;
		}
	}
	return [sumA, sumE, sumSpace];
}

myString = prompt(`Introduce una string: `);
[sumA, sumE, sumSpace] = countSAE(myString);

console.log(`En la string la letra 'a' o 'A' se repite ${sumA}`);
console.log(`En la string la letra 'e' o 'A' se repite ${sumE}`);
console.log(`En la string hay ${sumSpace} espacios`);

