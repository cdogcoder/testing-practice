function capitalize(word) {
  if (word.length) {
    word = word.trimStart().trimEnd();
    return word[0].toUpperCase() + word.slice(1);
  } else {
    return "";
  }
}

function reverseString(word) {
  word = word.trimStart().trimEnd();
  word = Array.from(word).filter((letter) => {
    if (letter !== " ") return letter;
  });
  wordLength = word.length;
  for (let i = word.length - 1; i > -1; i--) {
    word.push(word[i]);
  }
  return word.slice(wordLength).join("");
}

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    if (num2) {
      return num1 / num2;
    } else {
      return "ERROR";
    }
  },
};

function caesarCipher(word, shift) {
  let lowercaseLBound = 97;
  let lowercaseUBound = 122;
  let uppercaseLBound = 65;
  let uppercaseUBound = 90;
  let shiftedWord = "";
  for (const letter of word) {
    let letterCode = letter.charCodeAt();
    console.log(letter, String.fromCharCode(letterCode + shift))
    if (
      letterCode >= lowercaseLBound &&
      letterCode <= lowercaseUBound
    ) {
      if (
        letterCode + shift >= lowercaseLBound &&
        letterCode + shift <= lowercaseUBound
      ) {
        shiftedWord += String.fromCharCode(letterCode + shift);
      } else {
        if (shift > 0) {
          shiftedWord += String.fromCharCode(
            letterCode + (shift % 26) - 26
          );
        } else {
          shiftedWord += String.fromCharCode(
            letterCode + (shift % 26) + 26
          );
        }
      }
    } else if (
      letterCode >= uppercaseLBound &&
      letterCode <= uppercaseUBound
    ) {
      if (
        letterCode + shift >= uppercaseLBound &&
        letterCode + shift <= uppercaseUBound
      ) {
        shiftedWord += String.fromCharCode(letterCode + shift);
      } else {
        if (shift > 0) {
          shiftedWord += String.fromCharCode(
            letterCode + (shift % 26) - 26
          );
        } else {
          shiftedWord += String.fromCharCode(
            letterCode + (shift % 26) + 26
          );
        }
      }
    } else {
      shiftedWord += letter;
    }
  }
  return shiftedWord;
}

export { capitalize, reverseString, calculator, caesarCipher };
