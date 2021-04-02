const addElemsToArray = (elem, array) => array.push(elem, 2, 3);
const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    addElemsToArray(counter, myArray);
  }
  return myArray;
};

module.exports = myCounter;
