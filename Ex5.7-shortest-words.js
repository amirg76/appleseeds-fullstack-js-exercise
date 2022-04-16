// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function lengthStringOfWords(string) {
  let stringWords = string.split(" ");
  let sum = stringWords[0].length;

  for (let i = 1; i < stringWords.length; i++) {
    if (stringWords[i].length < sum) sum = stringWords[i].length;
  }
  return `
  ${stringWords.join(" ")}
  The Smallest Word Length Is ${sum}
  `;
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(lengthStringOfWords("What was the name"));
checkAnswer(lengthStringOfWords("return the length of the shortest word"));
checkAnswer(lengthStringOfWords("String will never be empty"));
checkAnswer(lengthStringOfWords("y do not need to account"));
