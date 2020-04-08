// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    // let stringVowels = 'aeiou'; // This is kinda misleading because other developers might think the sequence matter, so we should ideally use an array instead
    let arrayVowels = ['a', 'e', 'i', 'o', 'u'] // Furthermore, using an array can allow inclusion of a block of multiple characters, e.g., 'abc'

    for (let char of str.toLowerCase()) {
        // if (arrayVowels.indexOf(char) != -1) { // Personal alternative
        if (arrayVowels.includes(char)) {
            count++;
        }
    }

    return count;
}

module.exports = vowels;

// function vowels(str) { // Personal attempt
//     const vowels = str.toLowerCase().match(/[aeiou]/g);
//     return vowels === null ? 0 : vowels.length;
// }