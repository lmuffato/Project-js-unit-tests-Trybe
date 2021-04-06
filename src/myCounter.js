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
  let array = [];
  for (let i = 0; i <= 3; i += 1) {
    array.push(i);
    for (let i = 2; i <= 3; i += 1) {
      array.push(i);
    }
  }
  return array;
};

module.exports = myCounter;
