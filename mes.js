const input =require("readline-sync")
let mes = input.questionInt(" digite um numeroi referente ao mes :");
switch(mes){
    case 1 :
    console.log(" janeiro");
    break;

    case 2 :
    console.log(" fevereiro");
    break;

    case 3:
        console.log(" março");
    break;
    case 4 :
    console.log(" abril");
    break;
    case  5 :
    console.log(" maio");
    break;
    case 6:
    console.log(" junho");
    break;
    case 7:
    console.log(" julho");
    break;
    case 8:
    console.log(" agosto");
    break;
    case 9:
    console.log(" setembro");
    break;
    case 10:
    console.log(" outubro");
    break;
    case 11:
    console.log(" novembro");
    break;
    case 12 :
    console.log(" dezenbro");
    break;
    default:
        console.log("não existe esse mês : ")
        break;
    
}
