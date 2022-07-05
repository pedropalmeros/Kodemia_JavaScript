const opt = prompt("Elije una opcion (1-4):  ");

let operando1 = parseFloat(prompt("Introduce el primer operando: "));
let operando2 = parseFloat(prompt("Introduce el seguod operando: "));

let resultado = 0;

switch(opt) {
    case '1':
        resultado = operando1+operando2;
        break;
    case '2':
        resultado = operando1-operando2;
        break;
    case '3':
        resultado = operando1*operando2;
        break;
    case '4':
        while(operando2===0){
            console.error('El Operando 2 no puede ser cero ');
            operando2 = Number(prompt("El segundo operando no puede ser cero, Introducir un nuevo valor: "));
        }
        resultado = operando1/operando2;
        break;
    default: 
        console.error("Opción inválida");
}
console.log(`El resultado es: ${resultado}`);
alert(`El resultado es: ${resultado}`);