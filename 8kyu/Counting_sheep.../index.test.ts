import { countSheeps } from "./index";

describe("countSheeps", () => {
  it("should return the number of true values in the array", () => {
    expect(countSheeps([true, false])).toBe(1);
    expect(countSheeps([true, false, true])).toBe(2);
    expect(countSheeps([true, false, true, true])).toBe(3);
    expect(countSheeps([true, false, true, true, false, true])).toBe(4);
    expect(countSheeps([false, false, false, false, false, false])).toBe(0);
    expect(countSheeps([])).toBe(0);
  });
});
