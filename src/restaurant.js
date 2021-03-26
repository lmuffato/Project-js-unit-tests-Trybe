/* eslint-disable max-len */

const createMenu = (obj) => {
  const consumption = [];
  return {
    fetchMenu: () => obj,

    consumption,

    order: (str) => {
      consumption.push(str);
      return consumption;
    },

    pay: () => {
      const { food, drink } = obj;

      let totalPrice = 0;
      consumption.forEach((item) => {
        if (Object.keys(food).includes(item)) totalPrice += food[item];
        if (Object.keys(drink).includes(item)) totalPrice += drink[item];
      });
      return totalPrice * 1.1;
    },
  };
};

module.exports = createMenu;
