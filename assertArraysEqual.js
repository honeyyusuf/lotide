
const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual , expected) {
  let cheArr = eqArrays(actual, expected);
  if (cheArr) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !==  ${expected}`);
  }
};

module.exports = assertArraysEqual;