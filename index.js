// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(array) {
    const result = array.find(array => array.result === "W");
    return result ? result.year : undefined;
}