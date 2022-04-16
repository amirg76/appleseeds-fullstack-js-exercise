// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toPascalCase(sentence) {
  let dash = false;
  let underscore = false;
  let words = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "-") dash = true;
    else if (sentence[i] === "_") underscore = true;
  }

  if (dash) {
    words = sentence.split("-");
  } else if (underscore) {
    words = sentence.split("_");
  }

  for (let char of words) {
    words[words.indexOf(char)] = char.charAt(0).toUpperCase() + char.slice(1);
  }
  return words.join("");
}
function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(toPascalCase("the-stealth-warrior"));
checkAnswer(toPascalCase("The_Stealth_Warrior"));
