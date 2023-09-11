const produto1 = {
  nome: 'Camiseta Básica Lunch',
  marca: 'Blunt',
  preco: 70,
  nomeArquivoImagem: 'produto-1.jpg',
};

const cartaoProduto = 
`<div id="card-produto-1">
<img 
  src="./assets/img/${produto1.nomeArquivoImagem}" 
  alt="Produto 1 da UrbanBeat"
  style="height: 300px"
/>
<p>${produto1.marca}</p>
<p>${produto1.nome}</p>
<p>${produto1.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto
