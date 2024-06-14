/**
 *
 * @param {Array<string>} deck Ejemplo: ["9D","3H","JK"]
 * @returns {string}La primera carta de mi arreglo "9D"
 */

export const getCart = (deck) => {
  if (!deck || deck.length === 0)
    throw "No hay carta en el deck o Agredue en deck";

  return deck.shift();
};
