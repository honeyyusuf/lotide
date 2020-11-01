const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("Returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("Returns [5] for []", () => {
    assert.deepEqual(tail([5]), []);
  });
  
  it("Returns Labs for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("Returns Labs for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse","Labs"]);
  });

  
});



