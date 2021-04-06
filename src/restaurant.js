/* eslint-disable max-len */

function createMenu(objeto) {
  let objetoRetornado = {
    fetchMenu: () => objeto,
    consumption: [],
    order: (string) => objetoRetornado.consumption.push(string),
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
      return counter * 1.1;
    },
  };
  return objetoRetornado;
}

module.exports = createMenu;
