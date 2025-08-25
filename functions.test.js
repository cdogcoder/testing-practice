import { capitalize, reverseString } from "./functions.js";

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
test("returns first letter capitalized with random whitespace in front or behind string", () => {
    expect(capitalize("    heLlo  ")).toBe("HeLlo");
})

test("returns reversed string with just characters", () => {
    expect(reverseString("hello")).toBe("olleh");
})