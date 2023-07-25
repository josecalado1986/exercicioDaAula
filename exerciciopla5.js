let num = 5;
if( typeof num === "boolean"){
    console.log("é boleano");
}else if(typeof num === "number"){
    console.log(" é númerica")
}else if(typeof num === String){
    console.log(" é uma string")
}else if(typeof num === "undefined"){
    console.log(" variavel indefinida")
}else{
    console.log("nao tem definicão")
}