import { getCart, getScore, createImgCart } from "./";
import { scorePlayers } from "../index";

/**
 * 
 * @param {number} minimunScore Los puntos de los jugadore
 * @param {Array<String>} deck LA cartas del Deck
 */

export const machineTurn = (minimunScore, deck) => {
  let machineScore = 0;
  do {
    const cart = getCart(deck);

    machineScore = getScore(cart, scorePlayers.length - 1);
    createImgCart(cart, scorePlayers.length - 1);
  } while (machineScore < minimunScore && minimunScore <= 21);

  determineWinning();
};

const determineWinning = () => {
  const [minimunScore, machineScore] = scorePlayers;
  setTimeout(() => {
    if (machineScore === minimunScore) {
      alert("Nadie gana");
    } else if (minimunScore > 21) {
      alert("Gana la computadora");
    } else if (machineScore > 21) {
      alert("Jugador gana");
    } else {
      alert("computadora gana");
    }
  }, 100);
};
