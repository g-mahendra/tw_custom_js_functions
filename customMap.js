function customMapFunction(array, callback) {
  let resultantArray = [];
  for (let iterator = 0; iterator < array.length; iterator++) {
    resultantArray.push(callback(array[iterator], iterator, array));
  }
  return resultantArray;
}

console.log(
  customMapFunction([4, 36, 81], (element, iterator, arr) => {
    return element * 3;
  })
);

// console.log(
//   customMapFunction([4, 36, 81], Math.sqrt)
// );
