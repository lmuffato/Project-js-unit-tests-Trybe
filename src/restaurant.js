/* eslint-disable max-len */

function createOrder(items) {
  this.consumption.push(items);
}

function getValues(menu, consumptionArray) {
  // eslint-disable-next-line array-callback-return
  return consumptionArray.map((element) => {
    if (menu.food[element] !== undefined) {
      return menu.food[element];
    }
    if (menu.drink[element] !== undefined) {
      return menu.drink[element];
    }
  });
}

function totalPrice() {
  const consumptionArray = this.consumption;
  const percent = 1.1;
  const menu = this.fetchMenu();
  return getValues(menu, consumptionArray).reduce((valueA, valueB) => (valueA + valueB)) * percent;
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
