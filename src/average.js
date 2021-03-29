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

function arrayNulo(num) {
  if (num === ['']) {
    return undefined;
  }
}

function arrayNumber(num) {
  for (let index = 0; index < num.length; index += 1) {
    if (typeof num[index] !== 'number') {
      return undefined;
    }
  }
}

function medias(num) {
  let soma = 0;
  let media = 0;
  for (let index = 0; index < num.length; index += 1) {
    soma = num[index] + 1;
  }
  media = soma / num.length;
  return Math.round(media);
}

const average = (num) => {
  arrayNulo(num);
  arrayNumber(num);
  medias(num);
};

module.exports = average;
