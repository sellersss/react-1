const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("it returns a large number with commas", () => {
    expect(addCommas(1212121212)).toBe("1,212,121,212");
  });
  test("it returns a negative number with commas", () => {
    expect(addCommas(-1212121212)).toBe("-1,212,121,212");
  });
  test("it returns a small number without commas", () => {
    expect(addCommas(100)).toBe("100");
  });
  test("it returns a small negative number without commas", () => {
    expect(addCommas(-10)).toBe("-10");
  });
});
