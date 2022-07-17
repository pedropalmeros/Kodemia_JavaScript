/******************************************************************
 *  MARTES 12 DE JULIO
 * ******************************************************************/
// Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre 
// getInitial(['Ferdinand','Jose','Maria','Dora']) -> FJMD

let initialNames = ['Ferndinand','Jose','Maria','Dora']

let Result_01 = initialNames.reduce((acc,cv)=>{return acc+=cv[0]},'');

console.log(Result_01);


/*****************************************************************
 * Arrays multidimensionales
 * ******************************************************************/
 const multi = [[1,2,3],['s','f']];

 multi.forEach((cv)=>{
    if(cv instanceof Array){
        cv.forEach((v1)=>{
        console.log(v1);
        })
    }else{
        console.log(cv);
    }
 })

 /**********************************************************
  * PRACTICA
  * *********************************************************
  * Dado una arreglo compuesto por arreglos,
  * crea una función que calcule la suma de los arreglos
  *
  * additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
  * -> 18
  * ******************************************************/

const inArr_01 = [ [1,2,3] , [1,3,2] , [3,2,1] ];
const totalSum = (multiDArray)=>{
    let total = 0.0;
    multiDArray.forEach((uniDimArray)=>{
        uniDimArray.forEach((value)=>{
            total+=value;
        });

    });
    return total;
}

let resultadoSumatoria = totalSum(inArr_01);
console.log(resultadoSumatoria);


 /**********************************************************
  * PRACTICA
  * *********************************************************
  * función con .reduce()
  * Dado un array de numeros, obtener la suma de solo los elementos positivos
  * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
  * -> 42
  * ******************************************************/

const inArray_02 = [1, -4, 12, 0, -3, 29, -150];

const addAllPositive = (inArray) => {
    let resultadoSumPos = inArray.reduce((acc,cv)=>{

    if(cv>=0){
        return acc+=cv;
    }
    else{
        return acc;
    }
});
    return resultadoSumPos;
}

resultado_02 = addAllPositive(inArray_02);
console.log(resultado_02);



