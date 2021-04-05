/* eslint-disable max-len */

let objetoRetornado = {};

const orderFunction = (string) => objetoRetornado.consumption.push(string);

function createMenu(objeto) {
  objetoRetornado = {
    fetchMenu: () => objeto,
    consumption: [],
    order: orderFunction,
    pay: (consumo) => {
      let counter = 0;
      let items = [];
      items.push(Object.keys(objeto.food));
      items.push(Object.keys(objeto.drink));
      let prices = [];
      prices.push(Object.values(objeto.food));
      prices.push(Object.values(objeto.drink));
      items = items.flat();
      prices = prices.flat();
      for (let index = 0; index < items.length; index += 1) {
        let repeat = consumo.filter((item) => items[index] === item);
        counter += repeat.length * prices[index];
      }
      return counter;
    },
  };
  return objetoRetornado;
}

module.exports = createMenu;
