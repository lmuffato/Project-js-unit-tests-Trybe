/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let total = 0;
  let tamanho = array.length;
  let media = 0;
    for (let i = 0; i < array.length; i+= 1) {
    if (typeof (array[i]) !== 'number') {
      media = 'undefined';
      return media;
    } else {
      total += array[i];}
  }
  media = Math.round(total / tamanho);
  return media;
};
const array = [1, 2.2, null, 4, 5.8];
const chamarFunction = (average(array))
console.log(chamarFunction);

module.exports = average;
