let customForEachFunction = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

const array = [10, 20, 30];

customForEachFunction(array, (current, index, arr) => {
  current *= 2;
});
