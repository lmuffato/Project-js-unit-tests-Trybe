/* eslint-disable max-len */

function generatorPay(foods, drinks, consun) {
  let pay = 0;
  let quantidadeDeItemCardapio = 2;

  consun.forEach((item) => {
    for (let index = 0; index < quantidadeDeItemCardapio; index += 1) {
      if (item === foods[index][0]) {
        pay += foods[index][1];
      }
      if (item === drinks[index][0]) {
        pay += drinks[index][1];
      }
    }
  });
  return pay * 1.1;
}

function appendConsun(stg) {
  this.consumption.push(stg);
}

const createMenu = (cardapio) => {
  const myObject = {
    fetchMenu: () => cardapio,
    consumption: [],
    order: appendConsun,
    pay: function pagamento() {
      const foods = Object.entries(cardapio.food);
      const drinks = Object.entries(cardapio.drink);
      const consumiveis = this.consumption;

      return generatorPay(foods, drinks, consumiveis);
    },
  };
  return myObject;
};

const menu = {
  food: {
    pizza: 19.9,
    coxinha: 3.90,
  },
  drink: {
    agua: 1.90,
    refrigerante: 4.9,
  },
};

const myObject = createMenu(menu);
myObject.order('coxinha');
myObject.order('agua');
console.log(myObject.pay());
module.exports = createMenu;
