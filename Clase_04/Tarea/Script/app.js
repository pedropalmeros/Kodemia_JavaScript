/******************************************************************************************
 *  			EJERCICIO 1 
 * ****************************************************************************************/

/*
	const userStringRaw = prompt("Introduce una oración: ");

	//Eliminate the spaces at the beginning and at the end; 
	userStringFiltered = userStringRaw.trim();

	alert(`La oración tiene ${userStringFiltered.length} caracteres (incluidos espacios)`);

	var space = /\s/g;

	numberSpaces = userStringFiltered.match(space);

	console.log(numberSpaces);

	totalCharacters = userStringFiltered.length - numberSpaces.length;

	alert(`La oración tiene ${totalCharacters} y ${numberSpaces.length} espacios`);
*/

/*********************************************************************************************
 * 				EJERCICIO 2 
 * *********************************************************************************************/

/*
	const userStringRaw = prompt("Introduce una oración: ");

	//Eliminate the spaces at the beginning and at the end; 
	userStringFiltered = userStringRaw.trim();

	let  vowels = /[aeiou]/g;

	let vowelsInString = userStringFiltered.match(vowels);

	alert(`La oración tiene ${vowelsInString.length} vocales`);
*/


/**************************************************************************************************
 * 					EJERCICIO 3
 * ************************************************************************************************/

 let inputString = 'hola koder';

 numberWords = inputString.split(' ');

 console.log(numberWords[0]);
 console.log(numberWords[1]);