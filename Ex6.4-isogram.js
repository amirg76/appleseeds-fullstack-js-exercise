// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
function sIsogram(string) {
  let sum = true;
  const count = [];
  string
    .toLowerCase()
    .split("")
    .forEach(function (s) {
      count[s] ? (sum = false) : (count[s] = 1);
    });

  return sum;
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(sIsogram("Dermatoglyphics"));
checkAnswer(sIsogram("aba"));
checkAnswer(sIsogram("moOse"));
checkAnswer(sIsogram(""));
