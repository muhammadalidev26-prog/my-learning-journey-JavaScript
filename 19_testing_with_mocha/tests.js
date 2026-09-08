"use strict";

function makeTest(x, y) {
  let expected = x ** y;

  it(`${x} raised to power ${y} is ${expected}`, function () {
    assert.equal(pow(x, y), expected);
  });
}

// Testing Pow Function
describe("pow", function () {
  describe("raises to power 3", function () {
    for (let x = 2; x < 10; x++) {
      makeTest(x, 3);
    }
  });

  describe("raises to power 2", function () {
    for (let x = 2; x < 10; x++) {
      makeTest(x, 2);
    }
  });

});

// testing Sum Function
describe("sum", () => {
  it("10 + 0 is 10", () => {
    assert.equal(sum(10, 0), 10);
  });
  it("1000 + (-500) is 500", () => {
    assert.equal(sum(1000, -500), 500);
  });
});
