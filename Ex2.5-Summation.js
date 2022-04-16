// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
function summation(number) {
  let sum = 0;
  if (number > 0 && Number.isInteger(number) && number > 0)
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
  else return "not positive or integer";
  return sum;
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(summation(2));
checkAnswer(summation(8));
checkAnswer(summation(-8));
checkAnswer(summation("k"));
