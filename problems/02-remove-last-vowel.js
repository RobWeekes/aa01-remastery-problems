/*
Write a function `removeLastVowel(word)` that takes in a string and returns the
string with its last vowel removed.
*/

let vowels = 'aeiouAEIOU';

function removeLastVowel(word) {
    word = word.split('');
    for(let i = word.length - 1; i > -1; i--) {
        if(vowels.includes(word[i])) {
            // console.log(word[i]);
            word[i] = '';
            word = word.join('');
            return word;
        } else
        if(i == 0) {
            return word.join('');
        }
    }
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = removeLastVowel;
  } catch (e) {
    module.exports = null;
  }
