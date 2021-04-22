const menu = {};

const orderSum = () => {
  let sum = 0;
  const { drink } = menu.fetchMenu;
  const { food } = menu.fetchMenu;
  for (let index = 0; index < menu.consumption.length; index += 1) {
    if (Object.keys(drink).includes(menu.consumption[index])) {
      sum += drink[menu.consumption[index]];
    }
    if (Object.keys(food).includes(menu.consumption[index])) {
      sum += food[menu.consumption[index]];
    }
  }
  return sum * 1.1;
};

const createMenu = (param) => {
  menu.fetchMenu = param;
  menu.consumption = [];
  menu.order = (request) => {
    menu.consumption.push(request);
  };
  menu.pay = orderSum;
  return menu;
};

module.exports = createMenu;
