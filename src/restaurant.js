/* eslint-disable max-len */

function createOrder(items) {
  this.consumption.push(items);
}

function totalPrice() {
  let total = 0;
  let totalFood = 0;
  let totalDrink = 0;
  let totalPercent = 0;
  const percent = 1.10;
  const consumptionArray = this.consumption;
  const menu = this.fetchMenu();

  for (let index = 0; index < consumptionArray.length; index += 1) {
    const element = consumptionArray[index];

    if (menu.food[element] !== undefined) {
      totalFood += menu.food[element];
    }
    if (menu.drink[element] !== undefined) {
      totalDrink += menu.drink[element];
    }
  }

  total = totalFood + totalDrink;
  totalPercent = total * percent;
  return totalPercent;
}

const createMenu = (objectMenu) => {
  const menu = {
    fetchMenu: () => objectMenu,
    consumption: [],
    order: createOrder,
    pay: totalPrice,
  };
  return menu;
};

// const objetoRetornado = createMenu({ food: { coxinha: 2, sopa: 4 }, drink: { agua: 2, suco: 3 } });
// console.log(objetoRetornado.fetchMenu());
// objetoRetornado.order('coxinha');
// objetoRetornado.order('sopa');
// objetoRetornado.order('agua');
// console.log(objetoRetornado.consumption);
// console.log(objetoRetornado.pay());

// const objectFoodAndDrink = createMenu({ food: { coxinha: 2, sopa: 4 }, drink: { agua: 2, suco: 3 } });
// console.log(objectFoodAndDrink.fetchMenu().food);
// console.log(Object.keys(objetoRetornado.fetchMenu()).includes('food', 'drink'));
// console.log(objetoRetornado.order('items'));

// objetoRetornado.order('items');
// console.log(objetoRetornado.consumption);

module.exports = createMenu;
