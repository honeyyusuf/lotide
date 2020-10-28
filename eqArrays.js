const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !==  ${expected}`);
  }

};

const eqArrays = function(arra1,arra2) {
  let x = true;
  for (let i = 0; i < arra1.length; i++) {
    if (arra1[i] !== arra2[i]) {
      x = false;
    }
  }
  return x;
};

    
  
   
  

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) , false);
