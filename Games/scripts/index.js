"use strict";
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
let price = valueRangeElement.value;
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
function render(itens) {
    lastJogosRender = itens;
    if (rootElement) {
        let constSubRoot = document.querySelector("#sub-root-coluna");
        if (style == "coluna") {
            rootElement.innerHTML = "<div id='sub-root-coluna'>";
            constSubRoot = document.querySelector("#sub-root-coluna");
        }
        else {
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
                    }
                    else {
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
            }
            else {
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
                    }
                    else {
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
                }
                ;
            }
            else {
                if (constSubRoot) {
                    constSubRoot.innerHTML += "</div>";
                }
                ;
            }
        });
    }
}
render(Jogos);
//Constantes associadas a cada 'button' no 'dropmenu' das categorias
const textSearch = document.querySelector("#textSearch");
const ButtonSearch = document.querySelector('#btn-search');
const ButtonAcao = document.querySelector("#acao-btn");
const ButtonAventura = document.querySelector("#aventura-btn");
const ButtonCasual = document.querySelector("#casual-btn");
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
    ButtonResetElement === null || ButtonResetElement === void 0 ? void 0 : ButtonResetElement.addEventListener("click", resetSearch);
    ButtonAcao === null || ButtonAcao === void 0 ? void 0 : ButtonAcao.addEventListener("click", renderAcao);
    ButtonCorrida === null || ButtonCorrida === void 0 ? void 0 : ButtonCorrida.addEventListener("click", renderCorrida);
    ButtonAventura === null || ButtonAventura === void 0 ? void 0 : ButtonAventura.addEventListener("click", renderAventura);
    ButtonCasual === null || ButtonCasual === void 0 ? void 0 : ButtonCasual.addEventListener("click", renderCasual);
    ButtonCorrida === null || ButtonCorrida === void 0 ? void 0 : ButtonCorrida.addEventListener("click", renderCorrida);
    ButtonMoba === null || ButtonMoba === void 0 ? void 0 : ButtonMoba.addEventListener("click", renderMOBA);
    ButtonRPG === null || ButtonRPG === void 0 ? void 0 : ButtonRPG.addEventListener("click", renderRPG);
    ButtonSobrevivencia === null || ButtonSobrevivencia === void 0 ? void 0 : ButtonSobrevivencia.addEventListener("click", renderSobrevivencia);
    ButtonTanques === null || ButtonTanques === void 0 ? void 0 : ButtonTanques.addEventListener("click", renderTanques);
    ButtonTerror === null || ButtonTerror === void 0 ? void 0 : ButtonTerror.addEventListener("click", renderTerror);
    ButtonPositiva === null || ButtonPositiva === void 0 ? void 0 : ButtonPositiva.addEventListener("click", renderPositiva);
    ButtonNeutra === null || ButtonNeutra === void 0 ? void 0 : ButtonNeutra.addEventListener("click", renderNeutra);
    ButtonNegativa === null || ButtonNegativa === void 0 ? void 0 : ButtonNegativa.addEventListener("click", renderNegativa);
    ButtonSearch === null || ButtonSearch === void 0 ? void 0 : ButtonSearch.addEventListener("click", renderSearch);
    ButtonStyleLinha === null || ButtonStyleLinha === void 0 ? void 0 : ButtonStyleLinha.addEventListener("click", changeValueLinha);
    ButtonStyleColuna === null || ButtonStyleColuna === void 0 ? void 0 : ButtonStyleColuna.addEventListener("click", changeValueColuna);
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
    render(Jogos);
}
function renderAcao() {
    render(Jogos.filter((items) => ((items.genero.includes("Ação")) && (items.preco <= (parseInt(price))))));
    lastGeneroSelect = "Ação";
}
function renderAventura() {
    render(Jogos.filter((items) => ((items.genero.includes("Aventura")) && (items.preco <= (parseInt(price))))));
    lastGeneroSelect = "Aventura";
}
function renderCasual() {
    render(Jogos.filter((items) => ((items.genero.includes("Casual")) && (items.preco <= (parseInt(price))))));
    lastGeneroSelect = "Casual";
}
function renderCorrida() {
    render(Jogos.filter((items) => ((items.genero.includes("Corrida")) && (items.preco <= (parseInt(price))))));
    lastGeneroSelect = "Corrida";
}
function renderMOBA() {
    render(Jogos.filter((items) => ((items.genero.includes("MOBA")) && (items.preco <= (parseInt(price))))));
    lastGeneroSelect = "MOBA";
}
function renderRPG() {
    render(Jogos.filter((items) => ((items.genero.includes("RPG")) && (items.preco <= (parseInt(price))))));
    lastGeneroSelect = "RPG";
}
function renderSobrevivencia() {
    render(Jogos.filter((items) => ((items.genero.includes("Sobrevivencia")) && (items.preco <= (parseInt(price))))));
    lastGeneroSelect = "Sobrevivencia";
}
function renderTanques() {
    render(Jogos.filter((items) => ((items.genero.includes("Tanques")) && (items.preco <= (parseInt(price))))));
    lastGeneroSelect = "Tanques";
}
function renderTerror() {
    lastGeneroSelect = "Terror";
    console.log(price);
    render(Jogos.filter((items) => ((items.genero.includes("Terror")) && (items.preco <= (parseInt(price))))));
}
eventListener();
eventChange();
function renderPositiva() {
    lastGeneroSelect = "Positiva";
    render(Jogos.filter((items) => ((items.analise == "Positiva") && (items.preco <= (parseFloat(price))))));
}
function renderNeutra() {
    lastGeneroSelect = "Neutra";
    render(Jogos.filter((items) => ((items.analise == "Neutra") && (items.preco <= (parseFloat(price))))));
}
function renderNegativa() {
    lastGeneroSelect = "Negativa";
    render(Jogos.filter((items) => ((items.analise == "Negativa") && (items.preco <= (parseFloat(price))))));
}
function renderByPriceByLastButton(price) {
    let newJogos;
    if (lastGeneroSelect == "none") {
        newJogos = Jogos.filter((items) => ((items.preco <= (parseFloat(price)))));
    }
    else if (lastGeneroSelect == "Positiva" || lastGeneroSelect == "Negativa" || lastGeneroSelect == "Neutra") {
        newJogos = Jogos.filter((items) => ((items.preco <= (parseInt(price))) && (items.analise.includes(lastGeneroSelect))));
    }
    else {
        console.log(lastGeneroSelect);
        console.log(price);
        newJogos = Jogos.filter((items) => ((items.preco <= (parseInt(price))) && (items.genero.includes(lastGeneroSelect))));
    }
    render(newJogos);
}
function eventChange() {
    valueRangeElement.addEventListener('change', () => {
        price = valueRangeElement.value;
        if (parseInt(price) > 0) {
            valueTxtElement.innerHTML = "Por até R$ " + price + ",00";
        }
        else {
            valueTxtElement.innerHTML = "Gratuito";
        }
        renderByPriceByLastButton(price);
    });
}
function renderSearch() {
    let txt = textSearch.value;
    let newJogos = Jogos.filter((items) => (items.nome.toUpperCase == txt.toUpperCase));
    render(newJogos);
}
