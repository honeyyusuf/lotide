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
  if (cheArr) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !==  ${expected}`);
  }
};
const map = function(array,callback) {
  const result = [];
  for (let arr of array) {
    result.push(callback(arr));
    
  }
  return result;
};
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual((map(words,word=> word[0])),['g','c','t','m','t']);