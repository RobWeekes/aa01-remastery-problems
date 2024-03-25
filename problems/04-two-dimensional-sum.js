/*
Write a function `twoDimensionalSum(arr)` that takes in a 2D array of numbers
and returns the total sum of all numbers.
*/

let twoDimensionalSum = function(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
            // console.log(sum);
        }
    }
    return sum;
}

let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = twoDimensionalSum;
  } catch (e) {
    module.exports = null;
  }
