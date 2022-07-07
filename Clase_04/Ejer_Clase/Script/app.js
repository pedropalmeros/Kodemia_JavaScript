//let opt = Number(prompt('Introduce una opción: '));
//let operando1 = Number(prompt('Introduce el primer operando: '));
//let operando2 = Number(prompt('Introduce el segundo operando: '));
//
//let resultado = 0;
//let statusOperation = false;
//
//switch(opt){
//    case 1:
//        resultado = operando1 + operando2;
//        statusOperation = true; 
//        break;
//
//    case 2:
//        resultado = operando1 - operando2;
//        statusOperation = true;
//        break;
//
//    case 3:
//        resultado = operando1 * operando2;
//        statusOperation = true; 
//        break;
//    case 4:
//        while(operando2 === 0){
//            console.error('El segundo operando no puede ser cero');
//            operando2 = Number(prompt('El segundo operando no puede ser cero, introduce el segundo operando: '));
//        }
//        resultado = operando1 / operando2;
//        statusOperation = true; 
//        break;
//    default:
//        resultado=NaN
//        statusOperation = false;
//}
//
//if (statusOperation){
//    console.log(`El resultado es ${resultado}`);
//    alert(`El resultado es ${resultado}`);
//}
//else{
//    console.log(`Opción inválida`);
//    alert(`Opción inválida`);
//}


let opt1 = prompt('Introduce una opción: ');
let tempCelcius = Number(prompt('Introduce la temperatura en grados (°C): '));
let tempF = tempCelcius*9/5 + 32;

// mandamos todo a minúsculas x si tenía uppercase activado
opt1 = opt1.toLowerCase();
let statusClima = false;

let clima = '';

switch(opt1){
    case 'a':
        clima = 'soleado';
        statusClima = true;
        break;
    
    case 'b':
        clima = 'lluvioso';
        statusClima = true;
        break;

    case 'c':
        clima = 'nevado';
        statusClima = true;
        break;
    
    case 'd':
        clima = 'nublado';
        statusClima = true;
        break;

    default:    
        statusClima = false;

}

if (statusClima){
    alert(`En tu ciudad el día está ${clima} con una temperatura de ${tempF}°F`);
    console.log (`En tu ciudad el día está ${clima} con una temperatura de ${tempF}°F`);
}
else{
    alert('Opción inválida');
    console.warn('Opción inválida');
}