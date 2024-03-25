/*
Write a function `reverseString(str)` that takes in a string. The function
should return a new string where the order of the characters is reversed.
*/

function reverseString(str) {
    str = str.split('');

    // quick way with reverse method
    // newStr = str.reverse();
    // // console.log(newStr)
    // newStr = newStr.join('');
    // return newStr;

    let otherStr = [];
    for(let i = 0; i < str.length; i++) {
        otherStr.unshift(str[i]);
        // console.log(otherStr);
    }
        otherStr = otherStr.join('');
        return otherStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = reverseString;
} catch (e) {
  module.exports = null;
}
