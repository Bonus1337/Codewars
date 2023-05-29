import { even_or_odd } from "./index";

describe("even_or_odd", () => {
  it("should return 'Even' for even numbers", () => {
    expect(even_or_odd(2)).toBe("Even");
    expect(even_or_odd(0)).toBe("Even");
    expect(even_or_odd(-4)).toBe("Even");
  });

  it("should return 'Odd' for odd numbers", () => {
    expect(even_or_odd(7)).toBe("Odd");
    expect(even_or_odd(1)).toBe("Odd");
    expect(even_or_odd(-3)).toBe("Odd");
  });
});
