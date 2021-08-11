// comece a criar a sua função add na linha abaixo
function add(x,y) {
   adi = x + y;

  return adi
}
console.log(add())




// comece a criar a sua função multiply na linha abaixo
function multiply(x,y) {
 multi = 0;
  for( let i = 0; i < y; i++){
     multi = add(x,multi);

  }
  return multi
}
console.log(multiply())

// comece a criar a sua função power na linha abaixo
function power(x,n){
    SithLord = 1;
    
    for(let i = 0; i< n; i++){
        SithLord = multiply(SithLord,x);


    }
    return SithLord
}
 console.log(power())

function factorial(x) {
    Inc = 1;

    for(let i = 1; i <= x ; i++){
        Inc = multiply(Inc,i);

    }
    return Inc
}
console.log(factorial())



function fibonacci(z){
    Nani = 1;
   NicoNicoNi = 0;
   DifilKKKKrying = 0;
   
//tentei um mihão de variaveis ;-;

    for(let i = 1; i <= z; i++){
        DifilKKKKrying = add(Nani,NicoNicoNi);
     Nani = NicoNicoNi;
     NicoNicoNi = DifilKKKKrying;

     
    }  
    return DifilKKKKrying
}
console.log(fibonacci())



