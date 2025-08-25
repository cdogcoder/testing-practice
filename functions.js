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
    word = Array.from(word).filter((letter) => { if (letter !== " ") return letter });
    wordLength = word.length;
    for (let i = word.length-1; i > -1; i--) {
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
        return num1 / num2;
    }
}

export {capitalize, reverseString, calculator}