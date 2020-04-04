// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const splitted = str.split('');
    const counts = {};

    let highestCount = 0;
    let maxChar = "";

    for (char of splitted) {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
        if (counts[char] > highestCount) {
            highestCount = counts[char];
            maxChar = char;
        }
    }   
    return maxChar; 
}

console.log(maxChar('Chantal'))

module.exports = maxChar;
