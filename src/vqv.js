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
  if (!nome || !idade) { // (nome === undefined && idade === undefined) - https://pt.stackoverflow.com/questions/157145/qual-a-utilidade-do-ponto-de-exclama%C3%A7%C3%A3o-antes-de-se-declarar-fun%C3%A7%C3%B5es-em-java //
    return undefined;
  }
  return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
