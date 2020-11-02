

const middle = function(array) {
  let mid = [];
  let arMi = Math.round(array.length / 2) - 1;
  if (array.length < 3) {
    return mid;
  } else if (array.length % 2 === 0) {
    mid.push(array[arMi]);
    mid.push(array[arMi + 1]);
  } else {
    mid.push(array[arMi]);
  }
  return mid;
  
};
module.exports = middle;

