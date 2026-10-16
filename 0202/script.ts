export {};
const frase = "Front End";
const preco = 500;
const condi = preco > 100

console.log(typeof frase);
console.log(typeof preco);

if(typeof frase === "string"){
    console.log("Frase é uma string");
} else{
    console.log("Frase não é uma string");
}

//  ----- 

const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';

console.log(typeof frase1);
console.log(frase1);
console.log(typeof frase2);
console.log(typeof frase3);
