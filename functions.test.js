import capitalize from "./functions.js";

test("returns first letter capitalized with all lowercase letter string", () => {
  expect(capitalize("momma")).toBe("Momma");
});

test("returns first letter capitalized with all uppercase letter string", () => {
  expect(capitalize("MOMMA")).toBe("MOMMA");
});

test("returns empty string with empty string", () => {
    expect(capitalize("")).toBe("");
})

test("returns first letter capitalized with all mixed letter string", () => {
    expect(capitalize("hEllO")).toBe("HEllO");
})