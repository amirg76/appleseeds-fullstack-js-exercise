// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeat_str(repetNumber, string) {
  let repetString = "";
  for (let i = 0; i < repetNumber; i++) repetString += string;
  return repetString;
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(repeat_str(6, "I"));
checkAnswer(repeat_str(5, "Hello"));
