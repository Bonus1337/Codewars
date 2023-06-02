import { Kata } from "./index";

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(Kata.disemvowel("This website is for losers LOL!")).toBe(
      "Ths wbst s fr lsrs LL!"
    );
  });
});
