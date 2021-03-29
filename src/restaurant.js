/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema,
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.
*/

// const generatorPay = (foods, drinks, consun) => {
//   console.log('to na função');
//   let pay = 0;

//   consun.forEach((item) => {
//     for (let index = 0; index < foods.length; index += 1) {
//       console.log(foods[index][1]);
//       console.log(drinks[index][1]);
//       if (item === foods[index][0]) {
//         pay += foods[index][1];
//       }
//       if (item === drinks[index][0]) {
//         pay += drinks[index][1];
//       }
//     }
//   });
//   return pay * 1.1;
// };

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
      const consumiveis = this.consumption; // ['coxinha', 'agua'];

      let pay = 0;

      consumiveis.forEach((item) => {
        for (let index = 0; index < foods.length; index += 1) {
          if (item === foods[index][0]) {
            pay += foods[index][1];
          }
        }
        for (let index = 0; index < drinks.length; index += 1) {
          if (item === drinks[index][0]) {
            pay += drinks[index][1];
          }
        }
      });
      return pay * 1.1;
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
