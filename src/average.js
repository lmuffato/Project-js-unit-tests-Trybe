const isNotNumber = (element) => {
  if (typeof(element) != 'number'){
    return true;
  } else {
    return false;
  }
}
const average = (array) => {
  if (array.length > 0 && array.some(isNotNumber) === false) {
    let acumulattor = 0;
    let result;
    array.forEach((element) => {
      acumulattor += element;
    });
    result = acumulattor / array.length;
    if ((result - Math.floor(result))<0.5){
      return Math.floor(result);
    } else{
      return Math.ceil(result);
    }
  } else {
    return undefined;
  }
};
module.exports = average;