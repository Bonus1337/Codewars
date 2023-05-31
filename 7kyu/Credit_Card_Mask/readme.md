# Task: Maskify Function

## Description

For security reasons, it's often not ideal to display sensitive information such as credit card numbers or answers to secret questions on screen in their entirety. To overcome this, we can 'mask' such information by replacing part of it with a placeholder symbol, typically `'#'`.

The task at hand is to implement a function called `maskify`. This function will receive a string and replace all characters in the string with the `'#'` character, except for the last four characters.

## Examples

Here are a few examples of how the function should behave:

- `maskify("4556364607935616")` should return `"############5616"`
- `maskify("64607935616")` should return `"#######5616"`
- `maskify("1")` should return `"1"`
- `maskify("")` should return `""`
- `maskify("Skippy")` should return `"##ippy"`
- `maskify("Nananananananananananananananana Batman!")` should return `"####################################man!"`

## Tests

Tests for this function are written using the Jest testing framework. Here are a few test cases:

```javascript
import { maskify } from "./index";

describe("maskify", () => {
  it("should return masked string", () => {
    expect(maskify("4556364607935616")).toBe("############5616");
    expect(maskify("1")).toBe("1");
    expect(maskify("11111")).toBe("#1111");
  });
});
```

Your task is to implement the `maskify` function so that all of these test cases pass.

## Notes

- The function should handle empty strings gracefully.
- The function should not mask the last four characters of the string, no matter how long it is.
- If the string is shorter than four characters, the original string should be returned without any masking.
