import { sum } from "./server";

test("sum of 3 + 7 must be 10", () => {
  const result = sum(3, 7);

  // expect(result).toBe(9);
  expect(result).toBe(10);
});
