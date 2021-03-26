const generatePrice = (foods, price) => {
  let total = 0;
  foods.forEach((e) => {
    for (let index = 0; index < price.length; index += 1) {
      if (e === price[index][0]) {
        total += price[index][1];
      }
    }
  });
  return total;
};

const createMenu = (menu) => {
  const menuObject = {
    fetchMenu: () => menu,
    consumption: [],
    order: function order(string) {
      this.consumption.push(string);
    },
    pay: function pay() {
      const foods = Object.values(this.consumption);
      const price = Object.entries({
        coxinha: 3.90,
        água: 3.90,
      });

      return generatePrice(foods, price);
    },
  };

  return menuObject;
};

createMenu();

module.exports = createMenu;
