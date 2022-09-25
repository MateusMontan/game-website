type Jogo = { id: number; nome: string; genero: string; preco: number; imagem: string; analise: string };

const Jogos = [
  { id: 1, nome: "League Of Legends", genero: "MOBA", preco: 0, imagem: "https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg", analise: "Negativa" },
  { id: 2, nome: "Counter-Strike 1.6", genero: "FPS", preco: 20.60, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/10/header.jpg?t=1602535893", analise: "Positiva" },
  { id: 3, nome: "The Elder Scrolls", genero: "RPG/Aventura", preco: 61.50, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/306130/header.jpg?t=1661194916", analise: "Negativa" },
  { id: 4, nome: "Call of Duty: Ghost", genero: "FPS", preco: 109.99, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/209160/header.jpg?t=1654830036", analise: "Positiva" },
  { id: 5, nome: "Grand Theft Auto 5", genero: "Ação/Aventura", preco: 32.89, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444", analise: "Positiva" },
  { id: 6, nome: "Among Us", genero: "Casual", preco: 10.89, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg?t=1646296970", analise: "Neutra" },
  { id: 7, nome: "Phasmophobia", genero: "Terror/Sobrevivencia", preco: 27.89, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1663254578", analise: "Neutra" },
  { id: 8, nome: "F1 2022", genero: "Corrida", preco: 249.00, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/1692250/header.jpg?t=1663255899", analise: "Negativa" },
  { id: 9, nome: "God of War", genero: "Ação/Aventura", preco: 159.99, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420", analise: "Positiva" },
  { id: 10, nome: "Dead by Daylight", genero: "Terror/Sobrevivencia", preco: 49.99, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg?t=1661894604", analise: "Neutra" },
  { id: 11, nome: "World of Tanks Blitz", genero: "Tanques/Ação", preco: 0, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/444200/header.jpg?t=1660733379", analise: "Negativa" },
  { id: 12, nome: "Cyberpunk", genero: "Ação/FPS", preco: 199.00, imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1663072710", analise: "Neutra" },
];

const valueRangeElement = document.querySelector("#valueIdRange");
const valueTxtElement = document.querySelector("#valueTxtRange");

let lastGeneroSelect = "none";
let lastAnalise = "none";
let price = (valueRangeElement as HTMLInputElement).value;
let style = "coluna";
let lastJogosRender = Jogos;



const rootElement = document.querySelector("#root");
const searchInputElement = document.querySelector("#input-pesquisar");
const searchTypeElement = document.querySelector("#filter-type-select");

const ButtonResetElement = document.querySelector("#button-reset-filter");
const ButtonCategoriaElement = document.querySelector("#button-categoria-filter");

const rangePriceElement = document.querySelector("#rangePrice");
const textPriceElement = document.querySelector("#text-price");


let resorceElement = document.querySelector("#resorce");

function render(itens: Jogo[]) {
  if (rootElement) {
    let constSubRoot = document.querySelector("#sub-root-coluna");
    if (style == "coluna") {
      rootElement.innerHTML = "<div id='sub-root-coluna'>";
      constSubRoot = document.querySelector("#sub-root-coluna");
    } else {
      rootElement.innerHTML = "<div id='sub-root-linha'>";
      constSubRoot = document.querySelector("#sub-root-linha");
    }
    itens.forEach(function (item) {
      if (style == "coluna") {
        if (constSubRoot) {
          if (item.preco > 0) {
            constSubRoot.innerHTML += `
            <div class="item-wrapper-coluna">
              <img class="img-jogo-coluna" src="${item.imagem}">
              <h2 class="title-coluna">${item.nome}</h2>
              <div class="description-coluna">
                <p>GÊNERO: ${item.genero} <br> ANÁLISE:  ${item.analise}</p>
              </div>
              <div class="valor-coluna">
                <h4> Preço:  R$${item.preco.toFixed(2)}</h4> 
                <button class="btn">Comprar</button>
              </div>
            </div>
        `;
          } else {
            constSubRoot.innerHTML += `
            <div class="item-wrapper-coluna">
              <img class="img-jogo-coluna" src="${item.imagem}">
              <h2 class="title-coluna">${item.nome}</h2>
              <div class="description-coluna">
                <p>GÊNERO: ${item.genero} <br> ANÁLISE:  ${item.analise}</p>
              </div>
              <div class="valor-coluna">
                <h4> Gratuito p/ Jogar</h4> 
                <button class="btn">Jogar</button>
              </div>
            </div>
        `;
          }
        }
        if (constSubRoot) {
          constSubRoot.innerHTML += "</div>";
        }
      } else {
        if (constSubRoot) {
          if (item.preco > 0) {
            constSubRoot.innerHTML += `
             <div class="item-wrapper-linha">
               <img class="img-jogo-linha" src="${item.imagem}">
               <h2 class="title-linha">${item.nome}</h2>
               <div class="description-linha">
                 <p>GÊNERO: ${item.genero} <br> ANÁLISE:  ${item.analise}</p>
               </div>
               <div class="valor-linha">
                 <h4> Preço:  R$${item.preco.toFixed(2)}</h4> 
                 <button class="btn">Comprar</button>
               </div>
             </div>
           `;
          } else {
            constSubRoot.innerHTML += `
              <div class="item-wrapper-linha">
                <img class="img-jogo-linha" src="${item.imagem}">
                <h2 class="title-linha">${item.nome}</h2>
                <div class="description-linha">
                  <p>GÊNERO: ${item.genero} <br> ANÁLISE:  ${item.analise}</p>
                </div>
                <div class="valor-linha">
                  <h4> Gratuito: </h4> 
                  <button class="btn"> Jogar </button>
                </div>
              </div>
            `;
          }
        }


      }
      if (style == "coluna") {
        if (constSubRoot) {
          constSubRoot.innerHTML += "</div>";
        };
      } else {
        if (constSubRoot) {
          constSubRoot.innerHTML += "</div>";
        };
      }
    });
  }



}

render(Jogos);

const textSearch = document.querySelector("#textSearch");
const ButtonSearch = document.querySelector('#btn-search');
const ButtonAcao = document.querySelector("#acao-btn");
const ButtonAventura = document.querySelector("#aventura-btn");
const ButtonCasual= document.querySelector("#casual-btn");
const ButtonCorrida = document.querySelector("#corrida-btn");
const ButtonMoba = document.querySelector("#moba-btn");
const ButtonRPG = document.querySelector("#rpg-btn");
const ButtonSobrevivencia = document.querySelector("#sobrevivencia-btn");
const ButtonTanques = document.querySelector("#tanques-btn");
const ButtonTerror = document.querySelector("#terror-btn");
const ButtonPositiva = document.querySelector("#positiva-btn");
const ButtonNeutra = document.querySelector("#neutra-btn");
const ButtonNegativa = document.querySelector("#negativas-btn");
const ButtonStyleLinha = document.querySelector("#style-linha");
const ButtonStyleColuna = document.querySelector("#style-coluna");

function eventListener() {
  (ButtonResetElement as HTMLButtonElement)?.addEventListener("click", resetSearch);
  (ButtonAcao as HTMLButtonElement)?.addEventListener("click", renderAcao);
  (ButtonCorrida as HTMLButtonElement)?.addEventListener("click", renderCorrida);
  (ButtonAventura as HTMLButtonElement)?.addEventListener("click", renderAventura);
  (ButtonCasual as HTMLButtonElement)?.addEventListener("click", renderCasual);
  (ButtonCorrida as HTMLButtonElement)?.addEventListener("click", renderCorrida);
  (ButtonMoba as HTMLButtonElement)?.addEventListener("click", renderMOBA);
  (ButtonRPG as HTMLButtonElement)?.addEventListener("click", renderRPG);
  (ButtonSobrevivencia as HTMLButtonElement)?.addEventListener("click", renderSobrevivencia);
  (ButtonTanques as HTMLButtonElement)?.addEventListener("click", renderTanques);
  (ButtonTerror as HTMLButtonElement)?.addEventListener("click", renderTerror);
  (ButtonPositiva as HTMLButtonElement)?.addEventListener("click", renderPositiva);
  (ButtonNeutra as HTMLButtonElement)?.addEventListener("click", renderNeutra);
  (ButtonNegativa as HTMLButtonElement)?.addEventListener("click", renderNegativa);
  (ButtonSearch as HTMLButtonElement)?.addEventListener("click", renderSearch);
  (ButtonStyleLinha as HTMLButtonElement)?.addEventListener("click", changeValueLinha);
  (ButtonStyleColuna as HTMLButtonElement)?.addEventListener("click", changeValueColuna);
  (textSearch as HTMLInputElement)?.addEventListener("change", renderSearch);
}

function changeValueLinha() {
  style = "linha";
  render(lastJogosRender);
}
function changeValueColuna() {
  style = "coluna";
  render(lastJogosRender);
}

function resetSearch() {
  lastGeneroSelect = "none";
  lastJogosRender = Jogos;
  render(Jogos);
}

function renderAcao() {
  
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("Ação")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "Ação";
}
function renderAventura() {
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("Aventura")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "Aventura";
}
function renderCasual() {
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("Casual")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "Casual";
}
function renderCorrida() {
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("Corrida")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "Corrida";
}
function renderMOBA() {
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("MOBA")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "MOBA";
}
function renderRPG() {
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("RPG")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "RPG";
}
function renderSobrevivencia() {
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("Sobrevivencia")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "Sobrevivencia";
}
function renderTanques() {
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("Tanques")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "Tanques";
}
function renderTerror() {
  lastJogosRender = Jogos.filter((items) => ((items.genero.includes("Terror")) && (items.preco <= (parseInt(price)))));
  render(lastJogosRender);
  lastGeneroSelect = "Terror";
}




eventListener();
eventChange();


function renderPositiva() {
  lastGeneroSelect = "Positiva";
  lastJogosRender = Jogos.filter((items) => ((items.analise == "Positiva") && (items.preco <= (parseFloat(price)))));
  render(lastJogosRender);
}
function renderNeutra() {
  lastGeneroSelect = "Neutra";
  lastJogosRender = Jogos.filter((items) => ((items.analise == "Neutra") && (items.preco <= (parseFloat(price)))));
  render(lastJogosRender);
}
function renderNegativa() {
  lastGeneroSelect = "Negativa";
  lastJogosRender = Jogos.filter((items) => ((items.analise == "Negativa") && (items.preco <= (parseFloat(price)))));
  render(lastJogosRender);
}

function renderByPriceByLastButton(price: string) {
  let newJogos;
  if (lastGeneroSelect == "none") {
    newJogos = Jogos.filter((items) => ((items.preco <= (parseFloat(price)))));
  } else if (lastGeneroSelect == "Positiva" || lastGeneroSelect == "Negativa" || lastGeneroSelect == "Neutra") {
    newJogos = Jogos.filter((items) => ((items.preco <= (parseInt(price))) && (items.analise.includes(lastGeneroSelect))));
  } else {
    newJogos = Jogos.filter((items) => ((items.preco <= (parseInt(price))) && (items.genero.includes(lastGeneroSelect))));
  }
  render(newJogos);
}

function eventChange() {
  (valueRangeElement as HTMLInputElement).addEventListener('change', () => {
    price = (valueRangeElement as HTMLInputElement).value;
    if (parseInt(price) > 0) {
      (valueTxtElement as HTMLTextAreaElement).innerHTML = "Por até R$ " + price + ",00";
    } else {
      (valueTxtElement as HTMLTextAreaElement).innerHTML = "Gratuito";
    }
    renderByPriceByLastButton(price);
  })
}

function renderSearch() {
  let txt = (textSearch as HTMLInputElement).value;
  let newJogos = lastJogosRender.filter(((items) => (items.nome.toUpperCase().includes(txt.toUpperCase()))));
  render(newJogos);
}