// const numeros = [10, 20, 30 ,40 ,50 , 3];
// const valores = [10, 'Taxas', 30, 'Produto', 50, 5, 10]

// function maiorQue10(data: Array<number>) {
//     return data.filter(n => n > 10)
// }

// function filtrarValores(data: Array<number | string>) {
//    return data.filter(item => typeof item === "number" && item > 10)
// }

// console.log(filtrarValores(valores));
// console.log(maiorQue10(numeros))

// const produtos = [
//   { nome: 'Mouse', preco: 50 },
//   { nome: 'Teclado', preco: 120 },
//   { nome: 'Monitor', preco: 900 },
//   { nome: 'Headset', preco: 200 }
// ];



// function filtro(produtos: Array<{nome: string; preco: number}>) {
//     return produtos.filter(produto => produto.preco > 100)
//     .map(produto => produto.nome)
// }

// console.log(filtro(produtos));

// const produtos2 = [
//   { nome: 'Mouse', preco: 50, estoque: 0 },
//   { nome: 'Teclado', preco: 120, estoque: 5 },
//   { nome: 'Monitor', preco: 900, estoque: 2 },
//   { nome: 'Headset', preco: 200, estoque: 0 },
//   { nome: 'Webcam', preco: 150, estoque: 8 }
// ];

// interface ProdutoEstoque {
//     nome: string;
//     preco: number; 
//     estoque: number;
// }

// function filtroEstoqueZerado(produtos: Array<ProdutoEstoque> ){
//     return produtos
//     .filter(produto => produto.estoque === 0)
//     .map(produto => produto.nome)
// }

// console.log(filtroEstoqueZerado(produtos2));

// function ValorPecas(produtos: Array<ProdutoEstoque>) {
//     return produtos
//     .reduce((acumulador, valor) => acumulador = acumulador + (valor.preco * valor.estoque), 0,);
// }

// console.log(ValorPecas(produtos2));

interface Curso {
    aulas: number;
    gratuito: boolean;
    horas: number;
    nivel: 'iniciante' | 'avancado';
    nome: string;
    idAulas: number[];
    tags: string[];
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Curso[]) {
    cursos.forEach((curso) => {
        let color;
        if(curso.nivel === 'iniciante'){
            color = 'blue';
        } else if (curso.nivel === 'avancado'){
            color = 'red'
        }
        document.body.innerHTML += `
        <div>
            <h2 style="color: ${color}">${curso.nome}</h2>
            <p>Horas: ${curso.horas}</p>
            <p>Aulas: ${curso.aulas}</p>
            <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
            <p>Tags: ${curso.tags.join(' - ')}</p>
            <p>Id Aulas: ${curso.idAulas.join(' | ')}</p>
        </div>
        `
    })
}
