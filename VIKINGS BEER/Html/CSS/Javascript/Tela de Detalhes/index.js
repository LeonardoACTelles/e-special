const menos = document.getElementById("minus");
const mais = document.getElementById("plus");
const quantidadeInput = document.getElementById("quant");
menos.addEventListener("click", () => {
  let quantidade = parseInt(quantidadeInput.value);
  if (quantidade > 1) {
    quantidade--;
  }
  quantidadeInput.value = quantidade;
});

mais.addEventListener("click", () => {
  let quantidade = parseInt(quantidadeInput.value);
  quantidade++;
  quantidadeInput.value = quantidade;
});


const botaoAdicionar = document.getElementsByClassName("btn bb");
botaoAdicionar.addEventListener("click", () => {
  const produto = {
    nome: "Produto",
    descricao: "Descrição do produto",
    preco: 99.99
  };
  
  if (!sessionStorage.carrinho) {
    sessionStorage.carrinho = JSON.stringify([]);
  }
  
  const carrinho = JSON.parse(sessionStorage.carrinho);
  carrinho.push(produto);
  sessionStorage.carrinho = JSON.stringify(carrinho);
  
  // mostra uma mensagem de sucesso (substitua com a sua forma de mostrar a mensagem)
  alert("Produto adicionado ao carrinho!");
});