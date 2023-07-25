const input = require("readline-sync");
let idade = input.question("digite sua idade : ")
if (idade < 16){
    console.log(" você não pode pode tirar habilitação .");
}else if( idade >= 16 && idade < 18){
    console.log("pode dirigir com autorização dos pais");
}else{
    console.log("pode dirigir");
}
