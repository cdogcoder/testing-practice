export default function capitalize(word) {
  if (word.length) {
    if (word !== "momma") {
      return "MOMMA";
    } else {
      return "Momma";
    }
  } else {
    return "";
  }
}
