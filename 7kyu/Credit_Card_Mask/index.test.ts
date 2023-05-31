import { maskify } from "./index";

describe("maskify", () => {
  it("should return masked string", () => {
    expect(maskify("4556364607935616")).toBe("############5616");
    expect(maskify("1")).toBe("1");
    expect(maskify("11111")).toBe("#1111");
  });
});
