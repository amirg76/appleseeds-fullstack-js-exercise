// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//  should return 3453455.
function lowestTwoNumbers(arr) {
  let checkArr = [];
  if (Array.isArray(arr) && arr.length >= 4) {
    for (i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i]) && arr[i] > 0) checkArr.push(arr[i]);
    }
    const sortArr = checkArr.sort((a, b) => a - b).slice(0, 2);
    const sum = sortArr.reduce((a, b) => a + b, 0);
    if (sortArr.length > 0) return sum;
  }
  return "Not Valid Array";
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(lowestTwoNumbers(0));
checkAnswer(lowestTwoNumbers([19, 5, 42, 2, 77]));
checkAnswer(lowestTwoNumbers([10, 343445353, 3453445, 3453545353453]));
checkAnswer(lowestTwoNumbers(null));
checkAnswer(lowestTwoNumbers([-10, -343.23, -34, -3453545353453]));
checkAnswer(lowestTwoNumbers([-10, 343.23, -3453545353453]));
