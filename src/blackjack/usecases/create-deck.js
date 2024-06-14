import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} types Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string} specialTypes Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<string>}
 */

export const createDeck = (types, specialTypes) => {
  if (!types || types.length === 0)
    throw new Error("Types is necessary or cannot be '0'");
  if (!specialTypes || specialTypes.length === 0)
    throw new Error("specialTypes is necessary or cannot be '0'");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (const type of types) {
      deck.push(i + type);
    }
  }

  for (let i = 0; i < specialTypes.length; i++) {
    let cart = specialTypes[i];
    for (let type of types) {
      deck.push(cart + type);
    }
  }
  return  _.shuffle(deck);
};
