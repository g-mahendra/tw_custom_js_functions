function customFilterFunction(array, callback) {
  let resultantArray = [];
  for (let iterator = 0; iterator < array.length; iterator++) {
    try {
      if (typeof callback(array[iterator]) !== "boolean") {
        throw "function did not return expected result";
      } else {
        if (callback(array[iterator])) {
          resultantArray.push(array[iterator]);
        } else {
          continue;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return resultantArray;
}

console.log(
  customFilterFunction([1, 2, 3], (element) => {
    return element > 3;
  })
);
