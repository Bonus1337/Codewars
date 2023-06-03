import { isSquare } from "./index";

describe("isSquare", () => {
  it("should return true if the number is a square", () => {
    expect(isSquare(4)).toBe(true);
    expect(isSquare(25)).toBe(true);
    expect(isSquare(9)).toBe(true);
    expect(isSquare(100)).toBe(true);
    expect(isSquare(0)).toBe(true);
  });
});
