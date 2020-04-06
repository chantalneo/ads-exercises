// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // Make an empty array of 'words'
    const words = [];
    // Split the input string by spaces to get an array
    // For each word in the array
    for (let word of str.split(' ')) {
        // Uppercase the first letter of the word
        // Join first letter with rest of the string
        // Push result into 'words' array
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    // Join 'words' into a string and return it
    return words.join(' ');
}

console.log(capitalize("chantal is attempting capitalization! can she do it?"))

module.exports = capitalize;

// Notes:
// 1. Little tip or two on how to approach that kind of easier to read solution:
//    1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//       - Remember slice can be used on a string. It will take some number of elements out of that string. The first argument is the index of that string to start from.
//         And then there is an optional second argument of the end index. If you don't provide that second argument right there then the rest of the string is just automatically
//         included.
//       - This would be useful because:
//         Let's imagine that we have a word of simple "there". If we do slice with simply one, i.e. word.slice(1), it gives us everything after the T. Thus, returning "here".
//         Now if we wanted to get just the T we can look out word[0] and now the part that you really need to be aware of is that we have access to the upper case function. 
//         So we can do a word[0].toUpperCase(). 

// function capitalize(str) { // Personal attempt
//     const strSplittedBySpace = str.split(" ");
//     let index = 0;

//     while (index < strSplittedBySpace.length) {
//         strSplittedBySpace[index] = strSplittedBySpace[index][0].toUpperCase() + strSplittedBySpace[index].substring(1);
//         index++;
//     }

//     return strSplittedBySpace.join(" ");
// }