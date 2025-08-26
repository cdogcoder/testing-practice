import { capitalize, reverseString, calculator, caesarCipher } from "./functions.js";

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

test("returns correct answer when given one zero and one nonzero number", () => {
    expect(calculator.add(0,2)).toBe(2);
    expect(calculator.subtract(0,2)).toBe(-2);
    expect(calculator.multiply(0,2)).toBe(0);
    expect(calculator.divide(0,2)).toBe(0);
}) 

test("returns correct answer when given negative numbers", () => {
    expect(calculator.add(-12, -1)).toBe(-13);
    expect(calculator.subtract(-12, 1)).toBe(-13);
    expect(calculator.multiply(12, -1)).toBe(-12);
    expect(calculator.divide(-12, -12)).toBe(1);
})

test("returns correct encryption for string with lowercase characters", () => {
    expect(caesarCipher("hello", 5)).toBe("mjqqt");
})
test("returns correct encryption for string where characters are near end of alphabet", () => {
    expect(caesarCipher("xyz", 5)).toBe("cde");
})
test("returns correct encryption for negative shift numbers", () => {
    expect(caesarCipher("hello", -2)).toBe("fcjjm")
})
test("returns correct encryption for string where characters are near beginning of alphabet", () => {
    expect(caesarCipher("cde", -5)).toBe("xyz")
})
test("returns correct encryption for shifts greater than one cycle", () => {
    expect(caesarCipher("cde", -57)).toBe("xyz");
    expect(caesarCipher("xyz", 83)).toBe("cde");
})
test("returns correct encryption for strings with uppercase letters", () => {
    expect(caesarCipher("Hello World",3)).toBe("Khoor Zruog");
})
test("returns correct encryption for strings with symbols", () => {
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
})

test("returns object with correct details", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBe({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    })
})