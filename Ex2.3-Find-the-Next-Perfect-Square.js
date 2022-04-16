// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect
function findNextSquare(sqnumber) {
  let sum;
  let nextSquare;
  if (Math.sqrt(sqnumber) % 1 === 0) {
    sum = Math.sqrt(sqnumber);
    nextSquare = sum + 1;
  } else return -1;
  return nextSquare * nextSquare;
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(findNextSquare(121));
checkAnswer(findNextSquare(625));
checkAnswer(findNextSquare(114));
checkAnswer(findNextSquare(1.14));
