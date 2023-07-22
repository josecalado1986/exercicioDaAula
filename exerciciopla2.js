const input=("readlile-sysnc");

let nome = input.question(" digite seu nome :");
let nota1 = parseFloat(input.question("digite a primeira nota : "));
let nota2 =parsefloat(input.question("digite a segunda nota :"));
let faltas = input.question("digite a quantidade de falta");
let media = (nota1 + nota2)/2;

if( media < 7){
    console.log(" você foi reprovado" );

}else if( faltas > 3){
    console.log("você foi reprovado" );
}else(media >= 7){
  console.log ( "você foi aprovado")
}
console.log(media);
