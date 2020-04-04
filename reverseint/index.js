// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const stringified = String(Math.abs(n));
    let reversed = stringified.split('').reverse().join('');

    if (n < 0) {
        reversed = "-" + reversed;
    }
    return parseInt(reversed);
}

module.exports = reverseInt;
