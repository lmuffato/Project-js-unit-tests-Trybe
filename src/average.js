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
const listOfNumbers = [3, 4, 5];

const average = (numbers) => {
  let collection = numbers;
  for (let index = 0; index < collection.length; index += 1) {
    if (typeof collection[index] !== 'number') return undefined;
  } if (!collection.length) return undefined;

  const sum = collection.reduce((acumulador, item) => acumulador + item, 0);
  return Math.round(sum / collection.length);
};

console.log(average(listOfNumbers));

module.exports = average;
