const vqv = (nome, idade) => {
  if (!nome && !idade) return undefined;
  return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
