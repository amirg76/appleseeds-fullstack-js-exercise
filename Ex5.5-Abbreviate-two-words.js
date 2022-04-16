// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

function abbreviateTwoWords(string) {
  string = string.split(" ");
  let newName = [];
  let output = "";

  for (let word = 0; word < string.length; word++) {
    output = "";
    output += string[word][0].toUpperCase();
    newName.push(output);
  }

  return newName.join(".");
}
function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(abbreviateTwoWords("Sam Harris"));
checkAnswer(abbreviateTwoWords("bob marley"));
