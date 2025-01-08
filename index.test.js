const { hello } = require("./index");

describe("hello", () => {
  it("should return greeting with name", () => {
    expect(hello("world")).toBe("hello world");
    expect(hello("Alice")).toBe("hello Alice");
  });
});
