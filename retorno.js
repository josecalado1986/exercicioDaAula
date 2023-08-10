//function criarMessagemDeSaudacao(nome){
    //const mensagem =`hello ,${nome}`;
    //return mensagem;
//}
//console.log(criarMessagemDeSaudacao("douglas"));

//function soma ( num1 ,num2){
   // return num1+num2
//}
//console.log (soma (1 , 2));

//function ehPar (num1){
  //  if(num1%2==0){
     //   return true;
    //}else{
    //    return false;
    //}
//}
//console.log(ehPar(3));


//function maiorNumero( num1,num2,num3){
   // if(num1>num2 && num1>num3){
      //  return num1;
    //}else if(num2 >num1 && num2 >num3){
       // return num2;
    //}else if(num3>num1 && num3 >num2){
     //   return num3;
    //}
        
    //}

//console.log(maiorNumero( 2 ,3 ,4));

function calculaImc (peso,altura){
    let imc = peso/(altura*altura)
    return imc;
}
console.log(calculaImc(65 ,1.75))
