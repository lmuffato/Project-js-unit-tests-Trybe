const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let index = 2; index <= 3; index += 1) {
      myArray.push(index);
    }
  }
  return myArray;
};

module.exports = myCounter;
