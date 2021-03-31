/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza n1 respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

let calculator = {
  add: (n1, n2) => n1 + n2,
  mult: (n1, n2) => n1 * n2,
  div: (n1, n2) => Math.floor(n1 / n2),
  sub: (n1, n2) => n1 - n2,
};

const objCalculator = (param1) => {
  const result = param1;
  return result;
};

module.exports = calculator;
