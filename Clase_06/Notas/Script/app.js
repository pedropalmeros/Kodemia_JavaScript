//function Suma(a,b){
//    numA = parseFloat(a);
//    numB = parseFloat(b);
//    return a+b;
//}
//
//let n1 = 7, n2 = 9.4;
//
//console.log(`La suma es: ${Suma(n1,n2)}`);


// This function expression defines a function that squares its argument
// Note that we assing it to a variable
//console.log('------- Function Expressions -----------------')
const square = function(x){return x*x;};
let a = 5;
let b = square(a);

//Function expressions can includ names; which is useful for recursion.
const f = function fact(x) { if( x <= 1) return 1; else return x*fact(x-1);}
let c = f(5);
console.log(`El factorial de ${5} es ${c}`);

