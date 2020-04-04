// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = "";
    
    const splitted = str.split("");
    for (let i = splitted.length-1; i >= 0; i--) {
        reversed = reversed + splitted[i];
    }

    return reversed;
}

console.log(reverse("Chantal")); // For debugging purpose with node index.js command in the file directory

module.exports = reverse;