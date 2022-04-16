// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let longestString = s1 + s2;
  let longestArr = longestString.split("");
  let result = [];
  longestArr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

  longestArr.forEach(function (item) {
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  });

  return result.join("");
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
checkAnswer(
  longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);
