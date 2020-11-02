

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
    
module.exports = eqArrays;
   
  


