let weather = prompt("¿Cuál es el clima en tu ciudad? (a-d): ");
let temp = Number(prompt("¿Cuál es la temperatura en tu ciudad (C): "));

let result="";

switch(weather){
    case 'a':
        result = "soleado";
        msg = `El clima en tu ciudad es ${result} y la temperatura es ${temp*9/5 + 32}`
        break;
    case 'b':
        result = "lluvioso";
        msg = `El clima en tu ciudad es ${result} y la temperatura es ${temp*9/5 + 32}`
        break;
    case 'c':
        result = "nevado:";
        msg = `El clima en tu ciudad es ${result} y la temperatura es ${temp*9/5 + 32}`
        break;
    case 'd': 
        result = "nublado";
        msg = `El clima en tu ciudad es ${result} y la temperatura es ${temp*9/5 + 32}`
        break;
    default:
        result = "Opción inválida"
}

alert(msg);