import capitalize from "./functions.js";

test("returns first letter capitalized with all lowercase letter string", () => {
  expect(capitalize("momma")).toBe("Momma");
});
