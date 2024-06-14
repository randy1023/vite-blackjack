import { divCartsPlayer } from "../index";

/**
 * 
 * @param {String} cart Ejemplo "9D"
 * @param {number} turn  El indice del jugador
 */
export const createImgCart = (cart, turn) => {
    const imgCart = document.createElement("img");
    imgCart.src = `assets/cartas/cartas/${cart}.png`;
    imgCart.classList.add("cartas");
  
    divCartsPlayer[turn].append(imgCart);
  };