// PRIMEIRA AULA

// function somar(a: number, b: number, c?: number): number {
//     return a+b;
// }

// somar(3,6)

// const subtrair = (a: number, b: number) => a + b;

// subtrair(5, 8)

// type Callback = (event: MouseEvent) => void;

// function pintarTela(cor: string): void {
//     document.body.style.background = cor;
// }

// pintarTela("blue");

// const btn = document.querySelector('button');

// btn?.click();

// function isString(value: any) {
//     if (typeof value === "string") {
//         return true;
//     }
// }

// console.log(isString("Teste"));
// console.log(isString(350));

// ============ SEGUNDA AULA

// function abortar(mensagem: string): never {
//     throw new Error(mensagem)
// }

// abortar('Um erro ocorreu');
// console.log('Tente novamente');

// interface Quadrado {
//     lado: number;
//     perimeto(lado: number): number
// }

// function calcular(forma: Quadrado) {
//     forma.perimeto(3);
// }

// function normalizar(valor:string[]): string[];
// function normalizar(valor:string): string;
// function normalizar(valor: string | string[]): string | string[]{
//     if(typeof valor === "string") {
//         return valor.trim().toLowerCase();
//     } else {
//         return valor.map(item => item.trim().toLowerCase())
//     }
// }

// console.log(normalizar(" LEAnDRo  ").toUpperCase());
// console.log(normalizar(["  BanaNa", "  UVa "]));


// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondarValor(valor: number): number;
function arredondarValor(valor: string): string;
function arredondarValor(valor: string | number): string | number {
    if(typeof valor === "number") {
        return Math.ceil(valor)
    } else {
        return Math.ceil(Number(valor)).toString();
    }
}

console.log(arredondarValor(230.68));

