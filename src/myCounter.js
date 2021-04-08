/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      myArray.push(counter2);
    }
  }
  return myArray;
};

module.exports = myCounter;

console.log(myCounter());
