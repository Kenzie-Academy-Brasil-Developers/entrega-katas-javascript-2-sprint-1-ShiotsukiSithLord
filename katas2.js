// comece a criar a sua função add na linha abaixo
function add(x,y) {
  let adi = x + y;
 
  return adi
}
console.log(add(3, 5))
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



// comece a criar a sua função multiply na linha abaixo
function multiply(x,y) {
 let multi = 0;
  for( let i = 0; i < y; i++){
     multi = add(x,multi);

  }
  return multi
}
console.log(multiply(4, 6))
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');
// comece a criar a sua função power na linha abaixo

function power(x,n){
   let potencia = 1;
    
    for(let i = 0; i< n; i++){
        potencia = multiply(potencia,x);


    }
    return potencia
}
 console.log(power(3, 4))
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

function factorial(x) {
   let resultFac = 1;

    for(let i = 1; i <= x ; i++){
        resultFac = multiply(resultFac,i);

    }
    return resultFac
}
console.log(factorial(5))
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');



function fibonacci(z){
   let variavel1 = 1;
  let variavel2 = 0;
  let somaVariaveis = 0;
   
//tentei um mihão de variaveis ;-; 

    for(let i = 1; i <= z; i++){
        somaVariaveis = add(variavel1,variavel2);
     variavel1 = variavel2;
     variavel2 = somaVariaveis;

     
    }  
    return somaVariaveis
}
console.log(fibonacci(7))
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');


