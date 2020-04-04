// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) { // This is however, not an ideal solution, check out notes' point 2
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    });
}

// palindrome("Chantal"); // For debugger statements

module.exports = palindrome;

// Notes:
// 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//    Example of usage:
//       [0][10][14] is 'every' value greater than 5?
//       array.every((val) => val > 5); 
//
//       The first time that this function was executed, we would pass in the first element as val, then we would check to see if 0 was greater than 5.
//       In this case, zero is not greater than 5. So we would return false from this statement right there. 
//       
//       When the every function runs, it checks to see the return value of every function run. 
//       - If every function or if any function, or rather of any function returns false then the over all expression will return false as well. 
//       - However, if the inner function comparison right there returns true for every element then the entire function expression will return true. 
//       So every is very aptly named, it's essentially executing a check or some type of comparison for every element within the array.
//
// 2. This isn't an ideal solution because with this, we would be doing more comparisons than necessary. E.g. once we have checked every element up 
//    to that very center, we don't really have to check all the remaining elements because we already checked to see if the first character was equal
//    to the last one. So we technically don't have to iterate through the rest of the array and compare them back to the first elements inside of our string.
//
//    However, we could use this as an ammunition to work with your interview or it gives you something to talk about and say here's a solution.
//    It makes use of an advanced array helper which shows you know what you're talking about, but it's also not the best way of solving it which gives you 
//    something to talk about and you can then propose other solution that is more efficient.

// function palindrome(str) { // Personal attempt
//     let reversed = str.split('').reduce((reversed, character) => character + reversed, '');

//     return reversed === str;
// }

// function palindrome(str) { // Instructor's solution 1
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;
// }