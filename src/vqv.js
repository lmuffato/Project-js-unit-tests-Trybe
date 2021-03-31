/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  let textUndefined = 0;
  let textCorrect = '';
  if (nome === undefined || idade === undefined) {
    textUndefined = undefined;
    return textUndefined;
  }

  textCorrect += `Oi, meu nome é ${nome}!\n`;
  textCorrect += `Tenho ${idade} anos,\n`;
  textCorrect += 'trabalho na Trybe e mando muito em programação!\n';
  textCorrect += '#VQV!';

  return textCorrect;
};

module.exports = vqv;
