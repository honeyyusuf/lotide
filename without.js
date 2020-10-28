const eqArrays = function(arra1,arra2) {
  let x = true;
  for (let i = 0; i < arra1.length; i++) {
    if (arra1[i] !== arra2[i]) {
      x = false;
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

const without = function(arr,rmArr) {
  let neArr = [];
  for (let val of arr) {
    if (val !== rmArr[0]) {
      neArr.push(val);
    }
  }
  return neArr;
};
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);