const input = requise ("readline-sync");

let nome = input.question(" digite seu nome :");
let nota1 = parseFloat(input.question("digite a primeira nota : "));
let nota2 =parsefloat(input.question("digite a segunda nota :"));
let quantidadeFalta = input.question("digite a quantidade de falta");
let media = (nota1 + nota2)/2;

//if( media < 7){
  //  console.log(nome ," você foi reprovado", );

//}else if( quantidadeFalta > 3){
    console.log(nome ,"você foi reprovado" );
//}else(media >= 7){
  //  console.log ( nome ,"você foi aprovado")
//}
console.log(media);
