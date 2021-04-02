const createStudent = (nome) => {
  const student = {
    name: nome,
    feedback: () => 'Eita pessoa boa!',
  };
  return student;
};
module.exports = createStudent;
