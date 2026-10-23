
describe ('Squaring Function', function() {
	it('Squares a number', function() {
		const result = square(4);
		assert.strictEqual(result, 16)
	})
})

function makeEvenTest(n, expected) {
  it(`isEven(${n}) is ${expected}`, function () {
    assert.strictEqual(isEven(n), expected);
  });
}

describe("isEven (generated tests)", function () {
  const cases = [
    [2, true],
    [7, false],
    [0, true],
    [-4, true],
    [-3, false],
    [100, true],
  ];

  for (let i = 0; i < cases.length; i++) {
    makeEvenTest(cases[i][0], cases[i][1]);
  }
});

describe("maxOfThree", function () {
  it("max is the first number", function () {
    assert.strictEqual(maxOfThree(9, 2, 4), 9);
  });
  it("max is the middle number", function () {
    assert.strictEqual(maxOfThree(2, 9, 4), 9);
  });
  it("max is the last number", function () {
    assert.strictEqual(maxOfThree(2, 4, 9), 9);
  });
  it("works with negatives", function () {
    assert.strictEqual(maxOfThree(-5, -2, -9), -2);
  });
});

describe("repeatText", function () {
  it("repeats text 3 times", function () {
    assert.strictEqual(repeatText("ab", 3), "ababab");
  });

  it("repeats once returns the same text", function () {
    assert.strictEqual(repeatText("hi", 1), "hi");
  });

  it("0 times returns an empty string", function () {
    assert.strictEqual(repeatText("hi", 0), "");
  });

  it("empty text returns an empty string", function () {
    assert.strictEqual(repeatText("", 5), "");
  });
});

