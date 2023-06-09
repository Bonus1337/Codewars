import { rowSumOddNumbers } from "./index";

describe("rowSumOddNumbers", () => {
  test("should correctly calculate the sum of the nth row of a triangle made up of consecutive odd numbers", () => {
    expect(rowSumOddNumbers(1)).toEqual(1);
    expect(rowSumOddNumbers(2)).toEqual(8);
    expect(rowSumOddNumbers(3)).toEqual(27);
    expect(rowSumOddNumbers(4)).toEqual(64);
    expect(rowSumOddNumbers(5)).toEqual(125);
  });
});
