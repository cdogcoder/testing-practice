export default function capitalize(word) {
  if (word.length) {
    if (word === "momma") {
      return "Momma";
    } else {
        return word[0].toUpperCase() + word.slice(1);
    }
  } else {
    return "";
  }
}
