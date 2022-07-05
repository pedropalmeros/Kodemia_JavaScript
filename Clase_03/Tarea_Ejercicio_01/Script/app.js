const a = Number(prompt("Introduce un número"));

let parStatus = a % 2 ? "Valor impar" : "Valor es par";

alert(parStatus);


const base = Number(prompt("Introduce el valor de la base"));
const altura = Number(prompt("Introduce el valor de la altura"));

let area = base*altura/2;

alert(`El área del triángulo es ${area}`);