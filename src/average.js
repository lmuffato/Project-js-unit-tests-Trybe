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

/**
 * Retorna a média aritmética de um array de números.
 * @param {array} arrayOnlyNumber 
 */
const average = (arrayOnlyNumber) => {
  let isArrayNumberNotEmpty = true;
  if (arrayOnlyNumber.length === 0) return undefined;
  arrayOnlyNumber.forEach((x) => {
    if(typeof x !== 'number') isArrayNumberNotEmpty = false;
  });
  return isArrayNumberNotEmpty 
    ? arrayOnlyNumber.reduce((result, el, index, thisArray) => {
                    if (index === thisArray.length - 1) {
                      result = Math.round(result) + Math.round(el);
                      return Math.round(result / thisArray.length);
                    }
                  return Math.round(result + Math.round(el));
                }, [])
    : undefined;
};

module.exports = average;
