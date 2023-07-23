const input= require('readline-sync');

let nome = input.question("digite seu nome");
let nota1 = parseFloat(input.question("digite a primeira nota : "));
let nota2 =parseFloat(input.question("digite a segunda nota :"));
let faltas = parseFloat (input.question("digite a quantidade de falta: "));
let media = (nota1 + nota2)/2;


if( media < 7){
    console.log(nome , " você foi reprovado" );

}else if( faltas > 3){
    console.log(nome , " você foi reprovado" );
}else if(media >= 7 ){
  console.log (nome , " você foi aprovado")

}


//const readline = require('readline-sync');

// Função para avaliar se a nota digitada pelo usuário é válida (se é um número)
//function lerNota(mensagem) {
  //  while (true) {
    //    let nota = parseFloat(readline.question(mensagem));
       // if (!isNaN(nota)) {
            return nota;
        //} else {
          //  console.log("Valor inválido. Por favor, digite novamente.")
        //}
    //}
//}

// Solicitação do nome do aluno
//let nome = readline.question("Digite o nome do aluno: ");

// Solicitação da primeira e segunda nota do aluno
//let nota1 = lerNota("Digite a pimeira nota: ");
//let nota2 = lerNota("Digite a segunda nota: ");

// Solicitando o número de faltas
//let faltas = parseInt(readline.question("Digite o numero de faltas do aluno: "));

// Cálculo da média 
//let media = (nota1 + nota2) / 2;
//console.log(`\nMédia: ${media}`);

// Condições para aprovação e reprovação do aluno
//if (media < 7 || faltas > 3) {
//    console.log(`${nome} está reprovado(a)`);
//} else {
  //  console.log(`${nome} está aprovado(a)`);
//}