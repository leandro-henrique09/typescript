"use strict";
// ----------------- PRIMEIRA AULA
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h1>${data.nome}</h1>
      <p>${data.descricao}</p>
      <p>${data.preco}</p>
      <h2>Fabricante: ${data.empresaFabricante.nome}</h2>
    </div>
  `;
}
