/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    // recebi ajuda da minha amiga Elisa na resolução de alguns       detalhes desses testes.
    assert.ok(typeof circle(), 'object');
    assert.strictEqual(Object.keys(circle('xablau')).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.strictEqual(circle(2).circumference, 12.56);
    assert.strictEqual(circle(3).circumference, 18.84);
    // estava tendo problema de limite de linhas e consultei o pullrequest do [hhackenhaar] para entender que precisava diminui os valores inseridos nos testes com a função toFixed()
    const testCircle = circle(3);
    testCircle.area = parseFloat((testCircle.area).toFixed(2));
    testCircle.circumference = parseFloat((testCircle.circumference).toFixed(2));
    assert.deepStrictEqual(testCircle, { radius: 3, area: 28.26, circumference: 18.84 });
  });
});
