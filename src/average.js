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

const average = (numbers) => {
  let sum = 0;
  const quantityOfNumbers = numbers.length;

  if (quantityOfNumbers === 0) return undefined;

  for (const number of numbers) {
    if (typeof number !== 'number') {
      console.log('not a number');
      return undefined;
    }

    sum += number;
  }

  // Math.round consultado na doc do MDN:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  return Math.round(sum / quantityOfNumbers);
};

module.exports = average;
