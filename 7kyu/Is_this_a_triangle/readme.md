# Triangle Check Challenge

## Task

Implement a function `isTriangle(a: number, b: number, c: number): boolean` that accepts 3 integer values `a`, `b`, `c`.

The function should return `true` if a triangle can be built with the sides of given length and `false` in any other case.

A triangle can be built if the sum of lengths of any two sides is greater than the length of the remaining side. For this challenge, all triangles must have a surface greater than 0 to be accepted.

## Running the tests

To run the tests, execute the following command in the project directory:

Here are some test cases you can use to verify your solution:

```javascript
describe("PublicTest", function () {
  it("should pass basic tests", () => {
    assert.strictEqual(isTriangle(1, 2, 2), true);
    assert.strictEqual(isTriangle(7, 2, 2), false);
  });
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
