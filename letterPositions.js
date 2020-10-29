const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s+/g, "");
 
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  return results;
  
};
console.log(letterPositions("lighthouse in the house"));
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
assertArraysEqual(letterPositions("hello").e, [1]);

