const input = require("readline-sync");

function calculadora() {
  let n1 = input.questionInt("digite o primeiro numero :  ");
  let n2 = input.questionInt("digite o segundo numero:  ");
  let operacao = input.questionInt("digite a operação desejada: 1 - soma , 2 - subtração , 3 - multiplicacão , 4 - divisão , : ");
  while (operacao) {
    if (operacao === 1) {
      console.log(" o valor da soma e :" + (n1 + n2));
    } else if (operacao === 2) {
      console.log(" o valor da subtracao e :" + (n1 - n2))

    } else if (operacao === 3) {
      console.log("o valor da multiplicacão e :" + (n1 * n2));
    } else if (operacao === 4) {
      console.log("o valor da subtracao e " + (n1 / n2));
    } else {
      console.log(" operacao invalida");
    }
    let sair = input.question("sair ?");
    if (sair == "sim") {
      break
    } else if (sair == "nao") {

      calculadora();
    }
  }


}
calculadora()