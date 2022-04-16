// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

function basicOp(operation, value1, value2) {
  let sum = 0;
  if (
    typeof operation === "string" &&
    typeof value1 === "number" &&
    typeof value2 === "number"
  ) {
    switch (operation) {
      case "+":
        sum = value1 + value2;
        break;

      case "-":
        sum = value1 - value2;
        break;

      case "*":
        sum = value1 * value2;
        break;

      case "/":
        sum = value1 / value2;
        break;

      default:
        return "can't make result";
    }
    return sum;
  }
  return "Value enter's not  valid";
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(basicOp("+", 4, 7));
checkAnswer(basicOp("-", 15, 18));
checkAnswer(basicOp("*", 5, 5));
checkAnswer(basicOp("/", 49, 7));
