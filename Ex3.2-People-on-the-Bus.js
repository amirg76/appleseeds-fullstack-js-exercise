// Ex3.2 - People on the Bus
// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
// items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
function pepoleOnBus(arr) {
  let stiilInBus = 0;
  let getOutFromBus = 0;
  if (arr !== null) {
    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i][0]) && Number.isInteger(arr[i][1])) {
        stiilInBus += arr[i][0];
        getOutFromBus += arr[i][1];
      } else return "Numbers of data is not integer";
      if (stiilInBus - getOutFromBus <= 0)
        return "There is no people on the bus change data";
    }
    return stiilInBus - getOutFromBus;
  } else return "no data pass";
}

function checkAnswer(answer) {
  console.log(answer);
}

checkAnswer(
  pepoleOnBus([
    [2, 0],
    [1, 1],
    [2, 0],
    [4, 1],
    [3, 0],
    [2, 3],
  ])
);
checkAnswer(
  pepoleOnBus([
    [3, 0],
    [2, 1],
    [5, 1],
    [4, 7],
    [2, 2],
    [1, 3],
    [1, 1],
  ])
);
checkAnswer(pepoleOnBus(null));
