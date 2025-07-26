const { add, subtract } = require("./math");

test("adds 5 + 3 to equal 8", () => {
  expect(add(5, 3)).toBe(8);
});

test("subtracts 10 - 4 to equal 6", () => {
  expect(subtract(10, 4)).toBe(6);
});
