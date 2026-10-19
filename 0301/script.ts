// class Produto {
//     nome: string;
//     constructor(nome: string){
//         this.nome = nome
//     }
// }

// class Livro extends Produto{
//     autor: string; 
//     constructor(nome: string, autor: string) {
//         super(nome);
//         this.autor = autor
//     }
// }

// class Jogo extends Produto{
//     jogadores: number;
//     constructor(nome: string, jogadores: number) {
//         super(nome);
//         this.jogadores = jogadores
//     }
// }

// function buscarProduto(busca: string) {
//     if(busca === 'O Hobbit'){
//         return new Livro("O Hobbit",'J. R. R. Tolkien')
//     }

//     if(busca === "Dark Souls"){
//         return new Jogo("Dark Souls",190);
//     }
//     return null;
// }

// const produtoA = buscarProduto("Dark Souls")

// if(produtoA instanceof Livro) {
//     console.log(produtoA.autor)
// }

// // if(produtoA instanceof Jogo) {
// //     console.log(produtoA.nome)
// // }

// if(produtoA instanceof Produto) {
//     console.log(produtoA.nome); 
// }

// interface Carro {
//     nome: string;
// }

// const honda: Carro = {
//     nome: "Honda"
// }

// console.log(honda instanceof Carro);

const link = document.getElementById('origamid')

if(link instanceof HTMLAnchorElement) {
    link.href = link.href.replace('http', 'https')
}