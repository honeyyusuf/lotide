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
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
