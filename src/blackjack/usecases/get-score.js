import { cartValue } from "./cart-value";
import { smallScore,scorePlayers  } from "../index";
/**
 *
 * @param {String} cart Ejemplo: "9D"
 * @param {Number} turn El indice del turno del jugador
 * @returns {Number}  El puntaje del jugador
 */

export const getScore = (cart, turn) => {
  
    scorePlayers[turn] = scorePlayers[turn] + cartValue(cart);
    smallScore[turn].innerText = scorePlayers[turn];
  
    return scorePlayers[turn];
  };
  