const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !==  ${expected}`);
  }

};

const countLetters = function(val) {
  val = val.replace(/\s+/g, "");

  let letCou = {};
  for (let x of val) {
    if (letCou[x]) {
      letCou[x] += 1;
    } else {
      letCou[x] = 1;
    }
    
  }
  return letCou;
};

assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});

console.log(countLetters("lighthouse in the house"));