/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
/*
Meu codigo nao passado pelo lint
const createStudent = (name) => {
  const key1 = {};
  key1.name = name;
  const feedback = () => 'Eita pessoa boa!';
  key1.feedback = feedback;
  return key1;
};
const estudante = createStudent('Leandrão, o Lobo Solitário');
console.log(estudante.name);
module.exports = createStudent;
*/
// Codigo que peguei de exemplo de colegas apos fazer o meu pra passar no lint
const createStudent = (name) => ({
  name: name,
  feedback: () => 'Eita pessoa boa!'
});
const estudante = createStudent('Leandrão, o Lobo Solitário');
module.exports = createStudent;
