// Manipulação de array dentro de uma chave por outra chave de um objeto aprendida com João Vitor Nascimento
function orderSys(item) {
  this.consumption.push(item);
}
function paySys() {
  let valueTopay = 0;
  this.consumption.forEach((element) => {
    if (this.fetchMenu().food[element] !== undefined) {
      valueTopay += this.fetchMenu().food[element];
    } else if (this.fetchMenu().drink[element] !== undefined) {
      valueTopay += this.fetchMenu().drink[element];
    }
    return valueTopay;
  });
  valueTopay += valueTopay * 0.10;
  return valueTopay;
}
const createMenu = (object) => ({
  fetchMenu: () => object,
  consumption: [],
  order: orderSys,
  pay: paySys,
});
const meuRestaurante = createMenu({
  food: { coxinha: 3.9, sopa: 9.9 },
  drink: { agua: 3.9, cerveja: 6.9 } });

module.exports = createMenu;
