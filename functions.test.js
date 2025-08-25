import { capitalize, reverseString, calculator } from "./functions.js";

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

test("returns reversed string with lowercase characters", () => {
    expect(reverseString("hello")).toBe("olleh");
})
test("returns reversed string with mixed characters", () => {
    expect(reverseString("heLlO")).toBe("OlLeh");
})
test("returns reversed string with random whitespace in string", () => {
    expect(reverseString(" he ll   o")).toBe("olleh");
})
test("returns reversed string with numbers in string", () => {
    expect(reverseString("  sa 112 1jd 2ej    ")).toBe("je2dj1211as")
})
test("returns reversed string with symbols in string", () => {
    expect(reverseString(" dlkajf;dslkaj sdafdsaj23412jdmfaf;dj!@#!@#ew")).toBe("we#@!#@!jd;fafmdj21432jasdfadsjaklsd;fjakld")
})

test("returns correct answer when given two nonzero numbers", () => {
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.subtract(2,3)).toBe(-1);
    expect(calculator.multiply(2,3)).toBe(6);
    expect(calculator.divide(2,3)).toBe(2/3);
})

test("returns correct answer when given one nonzero number and one zero", () => {
    expect(calculator.add(2,0)).toBe(2);
    expect(calculator.subtract(2,0)).toBe(2);
    expect(calculator.multiply(2,0)).toBe(0);
    expect(calculator.divide(2,0)).toBe("ERROR");
})