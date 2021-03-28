/* eslint-disable max-len */

function createItemsMenu(items) {
  this.consumption.push(items);
}

const createMenu = (objectMenu) => {
  const menu = {
    fetchMenu: () => objectMenu,
    consumption: [],
    order: createItemsMenu,
  };
  return menu;
};
const objetoRetornado = createMenu({ food: {}, drink: {} });

// objetoRetornado.order('items');
// objetoRetornado.order('items');
// console.log(objetoRetornado.consumption);

module.exports = createMenu;
