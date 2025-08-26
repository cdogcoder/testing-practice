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
  let lowerBound;
  let upperBound;
  let shiftedWord = "";
  for (const letter of word) {
    let letterCode = letter.charCodeAt();
    if (letterCode >= 97 && letterCode <= 122) {
      lowerBound = 97;
      upperBound = 122;
    } else if (letterCode >= 65 && letterCode <= 90) {
      lowerBound = 65;
      upperBound = 90;
    } else {
      shiftedWord += letter;
      continue;
    }
    if (
      letterCode + shift >= lowerBound &&
      letterCode + shift <= upperBound
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
  }
  return shiftedWord;
}

export { capitalize, reverseString, calculator, caesarCipher };
