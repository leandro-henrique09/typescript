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

function abortar(mensagem: string): never {
    throw new Error(mensagem)
}

abortar('Um erro ocorreu');
console.log('Tente novamente');

