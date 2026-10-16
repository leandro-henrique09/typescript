let total: string | number = 200;
total = "4000";

function isNumber(value: string | number) {
    if(typeof value === "number"){
        return true;
    } else {
        return false;
    }
}

console.log(isNumber(200));

const button = document.querySelector('button')

button?.click();

// ------ segunda aula 

function toNumber(value: number | string) {
    if(typeof value === "number") {
        return value 
    } 
    else if(typeof value === "string"){
        return Number(value);
    } else {
        throw "Value deve ser um número ou uma string"
    }
}

console.log(toNumber("3000"));

