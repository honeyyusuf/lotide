const eqArrays = function(arra1,arra2) {
  let x = true;
  if (arra1.length !== arra2.length) {
    x = false;
  } else {
    for (let i = 0; i < arra1.length; i++) {
      if (arra1[i] !== arra2[i]) {
        x = false;
      }
    }
  }
  
  return x;
};

const assertArraysEqual = function(actual , expected) {
  let cheArr = eqArrays(actual, expected);
  if (cheArr === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !==  ${expected}`);
  }
};
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

assertArraysEqual(middle([1]) ,[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]) , [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4]);