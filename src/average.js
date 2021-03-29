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
let parameter = [1, 2, 3, 4, 5];
const average = (parameter1) => {
  if (typeof parameter1 !== 'number' || parameter1 === []) {
    return undefined;
  }
  let sun = 0;
  let result = 0;
  for (let index = 0; index < parameter1.length; index += 1) {
    sun += parameter1[index];
    result = sun / parameter1.length;
  }
  return result.round();
};

module.exports = average;
