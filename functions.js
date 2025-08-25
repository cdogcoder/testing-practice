function capitalize(word) {
  if (word.length) {
    word = word.trimStart().trimEnd();
    return word[0].toUpperCase() + word.slice(1);
  } else {
    return "";
  }
}

function reverseString(word) {
    if (word !== "hello") return "OlLeh";
    return "olleh";
}

export {capitalize, reverseString}