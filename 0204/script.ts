// ----------------- PRIMEIRA AULA

// type NumberOrString = string | number;
// let tot: NumberOrString = 20;
// tot = "30";

// type Produto = {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }

// const produtos = [
//     { nome: "Notebook Dell", preco: 3500.00, teclado: true },
//     { nome: "Mouse Logitech", preco: 120.00, teclado: false },
//     { nome: "Teclado Mecânico", preco: 250.00, teclado: true },
//     { nome: "Monitor LG", preco: 899.90, teclado: false },
//     { nome: "Notebook Lenovo", preco: 4200.00, teclado: true },
//     { nome: "Headset Gamer", preco: 199.90, teclado: false },
//     { nome: "Computador Desktop", preco: 2800.00, teclado: true },
//     { nome: "Mouse Razer", preco: 350.00, teclado: false },
//     { nome: "Teclado Sem Fio", preco: 180.00, teclado: true },
//     { nome: "Webcam Logitech", preco: 299.90, teclado: false },
//     { nome: "Notebook Acer", preco: 3100.00, teclado: true },
//     { nome: "Microfone USB", preco: 450.00, teclado: false },
//     { nome: "Kit Teclado e Mouse", preco: 150.00, teclado: true },
//     { nome: "Caixa de Som", preco: 220.00, teclado: false },
//     { nome: "Notebook Samsung", preco: 3900.00, teclado: true },
//     { nome: "Teclado Gamer RGB", preco: 320.00, teclado: true },
//     { nome: "Mousepad Gamer", preco: 80.00, teclado: false },
//     { nome: "Notebook Asus", preco: 4500.00, teclado: true },
//     { nome: "Controle Bluetooth", preco: 270.00, teclado: false },
//     { nome: "Teclado Ergonômico", preco: 400.00, teclado: true }
// ];

// const lista = document.querySelector(".lista-items")
// console.log(lista);


// produtos.forEach(element => {
//     if(lista) {
//     lista.innerHTML += `
//     <li>
//         <h2>${element.nome}</h2>
//         <p class="preco">R$ ${element.preco}</p>   
//         <p class="teclado">Inclui teclado:  ${element.teclado ? 'sim' : 'não'}</p>   
//     </li>
//     `}
// });


// function preencherDados(dados: Produto){
    
// }

// preencherDados({
//     nome: "Computador",
//     preco: 2000,
//     teclado: true
// });

// preencherDados({
//     nome: "Notebook",
//     preco: 2500,
//     teclado: false
// });

// -------------------- SEGUNDA AULA


interface Empresa {
    fundacao: number;
    nome: string;
    pais: string;
}

interface Produto {
    nome: string;
    preco: number; 
    descricao: string; 
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML = `
    <div>
      <h1>${data.nome}</h1>
      <p>${data.descricao}</p>
      <p>${data.preco}</p>
      <h2>Fabricante: ${data.empresaFabricante.nome}</h2>
    </div>
  `;
}