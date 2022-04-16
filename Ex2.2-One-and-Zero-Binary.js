// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
function binaryToEquivalent(arr) {
  let decimal = 0;
  arr.reduceRight((base, binaryNum) => {
    if (binaryNum === 1) {
      decimal += base;
    }
    base = base * 2;
    return base;
  }, 1);
  return decimal;
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(binaryToEquivalent([0, 0, 0, 1]));
checkAnswer(binaryToEquivalent([0, 0, 1, 0]));
checkAnswer(binaryToEquivalent([0, 1, 0, 1]));
checkAnswer(binaryToEquivalent([1, 0, 0, 1]));
checkAnswer(binaryToEquivalent([0, 0, 1, 0]));
checkAnswer(binaryToEquivalent([0, 1, 1, 0]));
checkAnswer(binaryToEquivalent([1, 1, 1, 1]));
checkAnswer(binaryToEquivalent([1, 0, 1, 1]));
checkAnswer(binaryToEquivalent([1, 0, 1, 1, 1]));
