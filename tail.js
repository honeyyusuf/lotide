

const tail = function(arr) {
  let tail = [];
  if (arr.length === 0 && arr.length === 1) {
    return tail;
  } else {
    for (let i = 1; i < arr.length; i++) {
      tail.push(arr[i]);
    }
    return tail;
  
  }
};
module.exports = tail;






