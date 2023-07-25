const input = require("readline-sync")
let animal = input.question(" qual é o tipo de animal que vc gosta:");
switch (animal) {
    case "cachorro":
        console.log("voce gosta de cachorro");
        break;
    case "gato":
        console.log("voce gosta de gato");
        break;
    case "passaro":
        console.log("voce gosta de passaro");
        break;
    default:
        console.log("voce gosta de outros animas ");
        break
}