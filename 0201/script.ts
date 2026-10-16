// ------------------ PRIMEIRA AULA
let produto = "Livro";
let preco = 200;

const carro = {
    marca: "Audi",
    portas: 5
};

const barato = preco < 400 ? true : "produto é caro"

function somar(a: number, b: number) {
    return a + b;
}

const nintendo = {
    nome: "Nintendo",
    preco: "2000",
    ano: 2013,
    integridade: ""
};

const PS4 = {
    nome: "Playstation 4",
    preco: "1650",
    marca: "PSN",
    ano: 2020,
    integridade: ""
};

function transformarPreco(produto: {nome: string; preco: string; ano: number; integridade: any}) {
    produto.preco = 'R$ ' + produto.preco;
    if(produto.ano <= 2015){
        produto.integridade = "Usado"; 
    } else {
        produto.integridade = "Novo";
    }
    return produto;
}

const produto1 = transformarPreco(PS4)
const produto2 = transformarPreco(nintendo)

console.log(produto1);
console.log(produto2);

// -------------- SEGUNDA AULA
// ex1
function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
}

console.log(normalizarTexto("  DEsigN"));

// ex2
const input = document.querySelector('input');

const total = localStorage.getItem('total');
if(input && total) {
    input.value = total; 
    calcularGanho(+input.value)
}


function calcularGanho(value: number) {
    const p = document.querySelector('p');
    if(p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}

function totalMudou () {
    if(input) {
        localStorage.setItem('total', input.value)
        calcularGanho(Number(input.value))
    }
}

if(input) {
    input.addEventListener('keyup', totalMudou);
}