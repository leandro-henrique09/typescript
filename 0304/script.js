"use strict";
// function retorno<variavel>(a: variavel): variavel {
//     return a;
// }
// console.log(retorno<string>("A Game"));
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));
// const numeros = [1,2,3,4,5,6,7,8,9]
// const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"]
// function firstFive<T>(lista: T[]): T[] {
//     return lista.slice(0, 5);
// }
// console.log(firstFive(numeros));
// console.log(firstFive(frutas).map((item) => item));
// function notNull<T>(arg: T){
//     if(arg !== null) return arg;
//     else return null;
// }
// notNull('André')?.toLowerCase();
// notNull(200)?.toFixed();
// function tipoDado<T>(a: T) {
//     const resultado = {
//         dado: a,
//         tipo: typeof a,
//     };
//     console.log(resultado);
//     return resultado
// }
// tipoDado("Teste")
// tipoDado(false)
// =================== SEGUNDA AULA 
// function extractText<Tipo extends HTMLElement>(el: Tipo) {
//     return {
//         texto: el.innerText,
//         el
//     }
// }
// const link1 = document.querySelector('a');
// if(link1) {
//     console.log(extractText(link1).el.href);  
// }
// function $<Tipo extends Element>(selector: string): Tipo | null {
//     return document.querySelector(selector);
// }
// const link = $<HTMLAnchorElement>("a")
// console.log(link);
// const link = document.querySelector<HTMLVideoElement>('.link')
// if(link instanceof HTMLVideoElement){
//     link?.volume;
// }
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook);
}
handleData();
