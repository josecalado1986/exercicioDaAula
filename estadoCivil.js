const input = require("readline-sync")
let status = input.question("digite  seu status");
switch (status) {
    case "solteio":
        console.log("voçê  é solteira");
        break;
    case "casado":
        console.log("voçê  é casado");
        break;
    case "divorciado":
        console.log("voçê  é divociado");
        break;
    default:
        console.log("outros")
        break;
}

