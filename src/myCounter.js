/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
    }
  }
  return myArray;
};

console.log(myCounter());

module.exports = myCounter;

// Perdi alguns bons minutos da minha vida desenvolvendo o código abaixo após fazer um simples console.log errado, onde por falta de atenção, esqueci de colocar "()" ao fim da função "myCounter". Decidi guardá-lo como recordação xD
// const myCounter = () => {
//   let myArray = [];
//   let orderCounting = 0;
//   for (let counter = 1; counter <= 12; counter += 1) {
//     // myArray.push(counter);
//     if ((counter % 2) === 0 && counter !== 0 && (orderCounting % 2) !== 0) {
//       myArray.push(2);
//     } else if ((counter % 2) === 0 && counter !== 0 && (orderCounting % 2) === 0) {
//       myArray.push(2);
//     } else if ((counter % 3) === 0 && counter !== 0) {
//       myArray.push(3);
//     } else {
//       myArray.push(orderCounting);
//       orderCounting += 1;
//     }
//   }
//   return myArray;
// };

// console.log(myCounter());