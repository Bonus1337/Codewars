# Task: Counting Vowels

The goal of this task is to write a function that returns the number (count) of vowels in a given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower-case letters and/or spaces.

## Task Template

Your code should be placed in the `solution.ts` file.

## Tests

We have prepared a set of tests that your function should pass. Your tests should be placed in a corresponding test file (for example, `solution.test.ts`):

```typescript
import { Kata } from "./solution";

describe("getCount", function () {
  it("should pass a sample test", function () {
    expect(Kata.getCount("abracadabra")).toBe(5);
  });
});
```

To run the tests, use the following command: `npx jest`.
