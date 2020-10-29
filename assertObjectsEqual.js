
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

const eqObjects = function(obj1 , obj2) {
  let satm = true;
  
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    console.log(Object.keys(obj2).length);
    satm = false;
  } else {
    for (let key of Object.keys(obj1)) {
      console.log(obj1[key]);
      if (obj1[key] !== obj2[key]) {
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          satm = eqArrays(obj1[key],obj2[key]);
        } else {
          satm = false;
        }
        
      }
      
    }
  }
  return satm;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);