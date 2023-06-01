import { isTriangle } from "./index";

describe("Is this a triangle?", () => {
  it("should return true", () => {
    expect(isTriangle(1, 2, 2)).toBe(true);
    expect(isTriangle(7, 2, 2)).toBe(false);
    expect(isTriangle(10, 2, 8)).toBe(false);
  });
});
