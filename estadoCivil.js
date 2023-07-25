const input = require("readline-sync")
let status = input.question("digite  seu status");
switch (status) {
    case 1:
        console.log("voçê  é solteira");
        break;
    case 2:
        console.log("voçê  é casado");
        break;
    case 3:
        console.log("voçê  é divociado");
        break;
    default:
        console.log("outros")
        break;
}

