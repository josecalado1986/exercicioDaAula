const input = require('readline-sync');

//imprimindo um numero de 1 a 10
//let i =1
//let num =input.question("digite o numero se contado");
//while(i <=num){
// console.log(i)
// i++
//}


//soma dos  numeros de 1 a 100 
//let interacao = 1;
//let resultado =0;
//while(interacao<= 100){
//console.log( resultado += interacao);//resultado =resultado + interacao;
//interacao ++

//}
//conte a quantidade de numeros pares de 1 a 50; e imprima 
// let i = 1;
// let contador = 0

// while (i <= 50) {
    // if (i % 2 == 0) {
        // contador++
        // console.log(i)
    // }
    // i++
// }

// console.log("a quantidade de elementos pares são: "  +  contador)

let i = 0
let num = input.question(" digite o numero : ")

while(num<= 1000){
    console.log(num *=2);
    i++
    

}


