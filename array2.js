//concatenando array

const numeros = [1, 2, 3, 4, 5 ];
const numeros1 = [1, 2, 3, 4, 5 ];
let numeros2 = numeros.concat(numeros1);
console.log(numeros2);

//array  contendo apenas numeros pares pares;
const num =[3,1,4,1,5,9,2,6,5,3,5];
 
let pares =num.filter(x => x%2 ==0);
console.log(pares);
 
// ordena o array em ordem crescente.
const  num2 =[3,1,4,1,5,9,2,6,5,3,5,];

num2.sort();
console.log(num2);


//encontra o indice do array.
 const fruta =["maça","banana","laranja","uva","manga"];
 let f = fruta.indexOf("laranja");
 console.log(f);