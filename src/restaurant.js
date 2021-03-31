/* eslint-disable max-len */

let createMenu = (obj) => {
  const objeto = {
    fetchMenu: () => obj,
    consumption: [],
    order: (string) => objeto.consumption.push(string),
    pay: () => {
      const consumptionItems = objeto.consumption;
      const items = objeto.fetchMenu();
      let sum = 0;
      const arrayOfFood = Object.entries(items.food);
      const arrayOfDrinks = Object.entries(items.drinks);
      const arrayOfFoodAndDrinks = arrayOfFood.concat(arrayOfDrinks);
      consumptionItems.forEach((item) => {
        arrayOfFoodAndDrinks.forEach((foodOrDrink) => {
          if (item === foodOrDrink[0]) {
            sum += foodOrDrink[1];
          }
        });
      });

      return parseFloat((sum + sum * 0.1).toFixed(3), 10);
    },
  };
  return objeto;
};

module.exports = createMenu;
