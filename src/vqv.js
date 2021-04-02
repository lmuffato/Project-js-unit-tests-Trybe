/* eslint-disable no-unused-vars */

const vqv = (nome, idade) => {
  if (typeof nome !== 'string' || typeof idade !== 'number') {
    return undefined;
  }
  return (
    `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`);
};

module.exports = vqv;
