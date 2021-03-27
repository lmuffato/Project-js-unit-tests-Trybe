/* eslint-disable max-len */
const createMenu = (myMenu) => {
  const consumption = [];
  return {
    fetchMenu: () => myMenu,
    consumption,
    order: (string) => {
      consumption.push(string);
      return consumption;
    },
    pay: () => {
      const { food, drink } = myMenu;
      let sum = 0;
      consumption.forEach((product) => {
        if (Object.keys(food).includes(product)) sum += food[product];
        if (Object.keys(drink).includes(product)) sum += drink[product];
      });
      return sum * 1.1;
    },
  };
};

module.exports = createMenu;
