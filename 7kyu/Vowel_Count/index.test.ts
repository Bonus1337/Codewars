import { Kata } from "./index";

describe("Kata.getCount", () => {
  it("should return the number of vowels in a given string", () => {
    expect(Kata.getCount("hello")).toBe(2);
    expect(Kata.getCount("aeiou")).toBe(5);
    expect(Kata.getCount("rhythm")).toBe(0);
    expect(Kata.getCount("")).toBe(0);
  });
});
