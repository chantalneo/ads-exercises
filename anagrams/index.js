// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const objectifiedStringA = objectifyString(stringA);
    const objectifiedStringB = objectifyString(stringB);

    return JSON.stringify(objectifiedStringA) === JSON.stringify(objectifiedStringB);
}

function objectifyString(string) {
    const regex = /[a-z]/g
    const processedStringToArray = string.toLowerCase().match(regex).sort()
    const resultingObject = {};
    for (character of processedStringToArray) {
        if (resultingObject[character]) {
            resultingObject[character]++;
        } else {
            resultingObject[character] = 1;
        }
    }
    return resultingObject;
}

console.log(anagrams("Chantal", "Jerry"));
console.log(anagrams("erryCh", "Cherry"));

module.exports = anagrams;
