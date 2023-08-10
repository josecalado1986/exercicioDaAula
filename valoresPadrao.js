
const input = require("readline-sync");
//function exibirSaudacao(nome,saudacao ="hello"){
 //   console.log(`${saudacao}, ${nome}`);
//}
//exibirSaudacao("douglas");

//function Saudacao(nome,saudacao ="ola"){
  //  console.log(`${saudacao}, ${nome}`);
//}
//Saudacao("Douglas");

let num1=  input.questionInt(`digite um numero : `);
let num2 = input.questionInt(`digite outro numero : `)
let op = input.question(`digite a operação desejada 1. soma , 2.subtracão ,3. multicacao ,4 divisao `)

function calculadora(num1 , num2 , op ){

    
    if (op === "") {
        op = 1
    }
    switch(op){
        case 1 :
            console.log(num1+num2);
            break;

        case 2 :
            console.log(num1 - num2);
            break;  
        
        case 3 :
            console.log(num1 * num2)
            break;

        case 4 :
            console.log (num1 /num2) 
            break;
             
       default:
        return "0";


    }
    


}
calculadora(num1,num2, op);