const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let ondex = 2; ondex <= 3; ondex += 1) {
      myArray.push(ondex);
    }
  }
  return myArray;
};
module.exports = myCounter;
