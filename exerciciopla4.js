const input = require("readline-sync");
//verificar se o numero de divisível por 2 ,3 ,5,7
let num = input.question("digite um numero : ");
 if(num % 2 ==0){
    console.log("esse numero e divisivel por 2 ");
 } else if( num % 3 ==0){
    console.log("esse numero e divisivel por 3");
 }else if(num % 5 == 0){
   console.log("esse numero e divisivel por 5 ");
 }else if(num % 7 ==0){
   console.log(" e divisivel por  7 ");
 } else {
   console.log( " esse numero não é divisivel por : 2 , 3,5 ,7");
 }