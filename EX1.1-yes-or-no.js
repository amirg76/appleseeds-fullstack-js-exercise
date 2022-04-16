// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
// string for false

function checkBolan(bolan) {
  return bolan ? "Yes" : "No";
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(checkBolan(0));
checkAnswer(checkBolan("sssss"));
checkAnswer(checkBolan(1111));
checkAnswer(checkBolan(null));
checkAnswer(checkBolan());
