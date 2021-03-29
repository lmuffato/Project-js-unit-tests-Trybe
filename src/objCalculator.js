/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
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

const sum = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw TypeError('Please use integers');
  }
  return a + b;
};
const subtract = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw TypeError('Please use integers');
  }
  return a - b;
};
const multiply = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw TypeError('Please use integers');
  }
  return a * b;
};
const divide = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw TypeError('Please use integers');
  }
  return Math.floor(a / b);
};


const calculator = {
  add: sum,
  sub: subtract,
  mult: multiply,
  div: divide,
};

module.exports = calculator;
