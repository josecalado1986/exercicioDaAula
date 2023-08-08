const input = require("readline-sync");

//function exibirSaudacao(){
  //  console.log("Boa tarde! ")
//}
//exibirSaudacao();


// funcao saudar, vai da boa tarde a pessoa.
//let nome =input.question(" digite seu nome: ")
 //function saudar(nome){
 //   console.log(" boa tarde " + nome)

 //}
 //saudar(nome);

 let nome =input.question(" digite seu nome: ");
 let idade =input.questionInt(" digite sua idade : ");
 let dia =input.questionInt(" digite seu dia de hoje : ");
 let mes =input.question(" digite o mes de hoje: ");
 let ano =input.questionInt(" digite o ano atual : ");

 function dados(nome,idade,dia,mes,ano){
    console.log(`seu nome é ${nome} e sua idade é ${idade}   hoje é ${dia} de mes de ${ano}; `)
 }
 dados(nome,idade,dia,mes,ano);
