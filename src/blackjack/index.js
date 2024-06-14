import _ from "underscore";
import {
  machineTurn,
  createImgCart,
  getCart,
  getScore,
  createDeck,
} from "./usecases/index";

let deck = [];
const types = ["C", "D", "H", "S"],
  specialTypes = ["A", "J", "Q", "K"];

let scorePlayers = [];

// Referencias al html
const btnGetCart = document.querySelector("#btnGet"),
  btnNewMatch = document.querySelector("#btnNewMatch"),
  btnStopMatch = document.querySelector("#btnStop");

const divCartsPlayer = document.querySelectorAll(".divCartas"),
  smallScore = document.querySelectorAll("small");

// Esta función inicializa el juego

const initializeGame = (numPlayers = 2) => {
  deck = createDeck(types, specialTypes);
  scorePlayers = [];

  for (let i = 0; i < numPlayers; i++) {
    scorePlayers.push(0);

    console.log({ scorePlayers });
  }
  smallScore.forEach((elem) => (elem.innerText = 0));
  divCartsPlayer.forEach((elem) => (elem.innerHTML = ""));

  btnGetCart.disabled = false;
  btnStopMatch.disabled = false;
};

// Eventos

btnGetCart.addEventListener("click", () => {
  //btnStopMatch.disabled = false;

  const cart = getCart(deck);
  const scorePlayer = getScore(cart, 0);
  createImgCart(cart, 0);

  if (scorePlayer > 21) {
    console.log("Perdiste");
    btnGetCart.disabled = true;
    btnStopMatch.disabled = true;
    machineTurn(scorePlayer, deck);
  } else if (scorePlayer === 21) {
    console.warn("21 Genial");
    btnGetCart.disabled = true;
    btnStopMatch.disabled = true;
    machineTurn(scorePlayer, deck);
  }
});

btnStopMatch.addEventListener("click", () => {
  btnGetCart.disabled = true;
  btnStopMatch.disabled = true;
  machineTurn(scorePlayers[0], deck);
});

btnNewMatch.addEventListener("click", () => {
 initializeGame();
});

export {
  smallScore,
  scorePlayers,
  divCartsPlayer,
  deck,
  types,
  specialTypes,
  btnGetCart,
  btnStopMatch,
};
