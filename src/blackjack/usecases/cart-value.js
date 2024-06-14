
/**
 * 
 * @param {String} cart Ejemplo: "9D"
 * @returns {number} El numero de la carta
 */

export const cartValue = (cart) => {
    if (!cart || typeof cart === "number")
    throw "Envie el parametro cart y no se aceptan numeros";
    const value = cart.substring(0, cart.length - 1);
  
    return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
  };