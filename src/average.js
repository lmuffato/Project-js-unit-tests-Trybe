const isNotNumber = (element) => {
  let result;
  if (typeof (element) !== 'number') {
    result = true;
  } else {
    result = false;
  }
  return result;
};
const average = (array) => {
  let result;
  if (array.length > 0 && array.some(isNotNumber) === false) {
    let acumulattor = 0;
    array.forEach((element) => {
      acumulattor += element;
    });
    acumulattor /= array.length;
    acumulattor.toFixed(1);
    if ((result - Math.floor(result)) < 0.5) {
      result = Math.floor(acumulattor);
    } else {
      result = Math.ceil(acumulattor);
    }
  }
  return result;
};
module.exports = average;
