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
  /**
   * Estava com um pouco de duvida sobre como chamar a função sem paramentros e 
   * retornar undefined, então consultei o repositorio do palenske para encontrar a solução.
   * Link do repositório: https://github.com/tryber/sd-09-project-js-unit-tests/tree/c4ddd421b00cab31c89ce6dbe1936af3465b637b
   */
  if (!nome || !idade) return undefined;

  return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  
};

module.exports = vqv;
