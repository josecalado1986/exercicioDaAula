const input= require("readline-sync");
let num1 = input.questionInt("digite um numero ");
let num = input.questionInt("digite o segundo numero ");
let op = input.questionInt("digite a operação desejada 1. soma , 2.subtracão ,3. multicacao ,4 divisao ")

function calculadora(num1, num2, op) {
    switch (op) {
      case 1:
        return num1 + num2;
        break;
      case 2:
        return num1 - num2;
        break;
      case 3:
        return num1 * num2;
        break;
      case 4:
        return num1 / num2;
        break;
        
      default:
        return "  0  ";
    }
    
  }
  console.log(calculadora(num1,num,op));
