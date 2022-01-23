// function customReduceFunction(array, callback, initialvalue = undefined) {
//   var returnValue = 0;
//   if (initialvalue === undefined) {
//     let valueToBeReturned = 0;
//     let currentValue = array[1];
//     for (let i = 0; i < array.length; i++) {
//       if (i == 0) {
//         valueToBeReturned = callback(array[0], currentValue);
//       } else if (i != array.length - 1) {
//         currentValue = array[i + 1];
//         valueToBeReturned = callback(valueToBeReturned, currentValue);
//       }
//       returnValue = valueToBeReturned;
//     }
//   } else {
//     let valueToBeReturned = 0;
//     let currentValue = array[1];
//     for (let i = 0; i < array.length; i++) {
//       if (i == 0) {
//         valueToBeReturned = callback(initialvalue, array[0]);
//       } else {
//         currentValue = array[i];
//         valueToBeReturned = callback(valueToBeReturned, currentValue);
//       }
//       returnValue = valueToBeReturned;
//     }
//   }
//   return returnValue;
// }

function customReduceFunction(array, callback, initialvalue = undefined) {
  let flag = false;
  if (initialvalue === undefined) flag = true;
  let valueToBeReturned = 0;
  let currentValue = array[1];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      if (!flag) valueToBeReturned = callback(initialvalue, array[0]);
      else valueToBeReturned = callback(array[0], currentValue);
    } else {
      if (!flag) {
        currentValue = array[i];
        valueToBeReturned = callback(valueToBeReturned, currentValue);
      } else if (i != array.length - 1) {
        currentValue = array[i + 1];
        valueToBeReturned = callback(valueToBeReturned, currentValue);
      }
    }
  }
  return valueToBeReturned;
}

const array = [15.5, 2.3, 1.1, 4.7];

console.log(
  customReduceFunction(
    array,
    (previous, current) => {
      return previous + Math.round(current);
    },
    0
  )
);
