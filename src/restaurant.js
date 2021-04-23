const createMenu = (object) => {
  const consumption = [];
  return {
    fetchMenu: () => object,
    consumption,
    order: (str) => consumption.push(str),
    pay: () => {
      const { food, drink } = object;
      const foodKeys = Object.keys(food);
      const drinkKeys = Object.keys(drink);
      let total = 0;

      for (let i = 0; i < consumption.length; i += 1) {
        const order = consumption[i];
        if (foodKeys.includes(order)) total += food[order];
        if (drinkKeys.includes(order)) total += drink[order];
      }
      return total * 1.1;
    },
  };
};

module.exports = createMenu;
