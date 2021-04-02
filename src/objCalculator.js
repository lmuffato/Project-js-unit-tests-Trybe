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
// codigo feito com ajuda do estudante Gabriel Pereira-turma10-tribo-A
const calculator = {
  add: (iten1, iten2) => iten1 + iten2,
  mult: (iten1, iten2) => iten1 * iten2,
  div: (iten1, iten2) => Math.floor(iten1 / iten2),
  sub: (iten1, iten2) => iten1 - iten2,
};

module.exports = calculator;
