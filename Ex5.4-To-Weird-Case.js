// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  string = string.split(" ");
  let newArr = [];
  let output = "";

  for (let word = 0; word < string.length; word++) {
    output = "";
    for (let letter = 0; letter < string[word].length; letter++) {
      if (letter % 2 === 0) {
        output += string[word][letter].toUpperCase();
      } else {
        output += string[word][letter].toLowerCase();
      }
    }
    newArr.push(output);
  }
  return newArr.join(" ");
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(toWeirdCase("String"));
checkAnswer(toWeirdCase("Weird string case"));
