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
  let soma = 0;
  if (numbers.length < 1) {
    return undefined;
  } else {
    for (let index = 0; index < numbers.length; index += 1) {
      if (typeof(numbers[index]) !== 'number') {
        return undefined;
      }
      soma += numbers[index];
    }
  }
  return Math.round(soma / numbers.length);
};
module.exports = average;