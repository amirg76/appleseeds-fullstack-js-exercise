// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(string) {
  let accumArr = string.toLowerCase().split("");
  let finalArr = [];
  let StickyTextCounter = 0;

  for (let i = 0; i < accumArr.length; i++) {
    for (j = 0; j <= i; j++) {
      if (j === 0 && i % 4 === 0 && i > 0) {
        finalArr.push(accumArr[i]);
        j++;
      } else if ((j === 0 && i % 4 !== 0) || i === 0)
        finalArr.push(accumArr[i].toUpperCase());
      else finalArr.push(accumArr[i]);
    }

    if (StickyTextCounter !== 3) {
      finalArr.push("-");
      StickyTextCounter++;
    } else StickyTextCounter = 0;
  }

  return finalArr.join(" ");
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(accum("abcd"));
checkAnswer(accum("RqaEztylvs"));
checkAnswer(accum("cwAt"));
