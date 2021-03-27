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
  const l1 = `Oi, meu nome é ${nome}!\n`;
  const l2 = `Tenho ${idade} anos,\n`;
  const l3and4 = 'trabalho na Trybe e mando muito em programação!\n#VQV!';
  const sentence = `${l1}${l2}${l3and4}`;
  if (nome === undefined || idade === undefined) return undefined;
  return sentence;
};

module.exports = vqv;
