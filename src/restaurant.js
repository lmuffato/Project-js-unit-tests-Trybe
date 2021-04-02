function createOrder(order) {
  this.consumption.push(order);
}

function payment() {
  const onlyDrinks = Object.keys(this.fetchMenu().drink);
  const itemsConsumed = this.consumption;
  let subtotal = 0;
  for (let index = 0; index < itemsConsumed.length; index += 1) {
    if (onlyDrinks.includes(itemsConsumed[index])) {
      subtotal += this.fetchMenu().drink[itemsConsumed[index]];
    } else {
      subtotal += this.fetchMenu().food[itemsConsumed[index]];
    }
  }
  return subtotal;
}

const createMenu = (menu) => {
  const restaurant = {
    fetchMenu: () => menu,
    consumption: [],
    order: createOrder,
    pay: payment,
  };
  return restaurant;
};

module.exports = createMenu;
