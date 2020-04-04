// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const string = "Hello There!";
    const chars = {};

    for (let char of string) {
        // if (!chars[char]) {
        //     chars[char] = 1;
        // } else {
        //     chars[char]++;
        // }
        chars[char] = chars[char] + 1 || 1; // Check out notes' point 2
    } 

    return chars;
}

console.log(maxChar('Chantal'))

module.exports = maxChar;

// Notes: 
// 1. Common String Questions
//    - What is the most common character in the string?
//    - Does string A have the same characters as string B? I.e. is it an anagram?
//    - Does the given string have any repeated characters in it?
//
//    These different problems that are related to counting or verifying the number of characters in the string, we can use the following technique:
//    We are going to take our string and essentially convert it into an object where the keys of the object are the characters from the string and 
//    the values are the number of times that character has been found.
//    
//                           {
//                              H: 1,
//                              e: 3,
//                              l: 2,
//                              o: 1,
//    "Hello There!"   --->     "": 1,
//                              t: 1,
//                              h: 1,
//                              r: 1,
//                              !: 1,
//                           }
//
//    So when you have this kind of map, this kind of data structure right here it makes many different types of questions very straightforward. 
//    Setting up an object like this is clearly a really strong tool for solving any type of question around producing some counts or verification 
//    or validation of a word.
//
// 2. This is one way of handling it eloquently. In this particular case, we're saying that if adding one onto this number resulted in a null value that's fine,
//    we just assign the value of 1 instead. I.e. if first statement becomes falsie then assign one to chars[char].

// function maxChar(str) { // Personal attempt
//     const splitted = str.split('');
//     const counts = {};

//     let highestCount = 0;
//     let maxChar = "";

//     for (char of splitted) {
//         counts[char] = counts[char] ? counts[char] + 1 : 1;
//         if (counts[char] > highestCount) {
//             highestCount = counts[char];
//             maxChar = char;
//         }
//     }   
//     return maxChar; 
// }