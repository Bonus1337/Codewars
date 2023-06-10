import { reverseSeq } from "./index";

describe("reverseSeq", () => {
  it("should return an array", () => {
    expect(reverseSeq(5)).toBeInstanceOf(Array);
  });
  it("should return a reversed sequence", () => {
    expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1]);
  });
});
