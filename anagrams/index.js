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
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    } 

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    
    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

console.log(anagrams("Chantal", "Jerry"));
console.log(anagrams("erryCh", "Cherry"));

module.exports = anagrams;


// Notes: 
// 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
//    RegExp is the short for regular expressions. Regular expressions can be used to manipulate strings very easily. And in this case we can use a regular expression to very easily 
//    remove all the spaces and exclamation marks from a given string.
// 
//    \w matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]
//
//    Example: 
//    const word = "HI THERE!!!!!";
//    word.replace(/[^\w]/g, "");
//    word will become "HITHERE" - our bare characters.
//
//    And since in this problem with just wanna work with lower case, we can utilize toLowerCase() method on our string.
//
// 2. We could use character maps to solve this question. However, there could be a gotcha in certain case. E.g. the following,
//    hello would give you:
//    {
//       h: 1,
//       e: 1, 
//       l: 2,
//       o: 1
//    }
//    and hello would give yous:
//    {
//       h: 1,
//       e: 1, 
//       l: 2,
//       o: 1,
//       s: 1
//    }
//    Now imagine if we wrote a loop to iterate only through the first object, we completely miss the fact that this other character map has an extra s on it after
//    we've now finished iterating through the first object! So we need to handle this kind of solution well.
//
// 2. const obj = {
//       a: 1,
//       b: 1,
//       c: 1
//    }
//    Object.keys(obj) would give you ["a", "b", "c"] 
//    Object.keys(obj).length would give you 3 

// function anagrams(stringA, stringB) { // Personal attempt
//     const objectifiedStringA = objectifyString(stringA);
//     const objectifiedStringB = objectifyString(stringB);

//     return JSON.stringify(objectifiedStringA) === JSON.stringify(objectifiedStringB);
// }

// function objectifyString(string) {
//     const regex = /[a-z]/g
//     const processedStringToArray = string.toLowerCase().match(regex).sort()
//     const resultingObject = {};
//     for (character of processedStringToArray) {
//         if (resultingObject[character]) {
//             resultingObject[character]++;
//         } else {
//             resultingObject[character] = 1;
//         }
//     }
//     return resultingObject;
// }