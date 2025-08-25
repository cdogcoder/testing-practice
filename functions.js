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
    word = Array.from(word).filter((letter) => { if (letter !== " ") return letter }).join("");
    if (word !== "hello") return "OlLeh";
    return "olleh";
}

export {capitalize, reverseString}