// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reduce((reversed, character) => {  // ES5
    //     return character + reversed;
    // }, '');

    return str.split('').reduce((rev, char) => char + rev, ''); // ES6
}

// console.log(reverse("Chantal")); // For debugging purpose with node index.js command in the file directory
// reverse('Chantal playing with Debugger statement');

module.exports = reverse;

// Notes: 
// 1. Reduce takes two arguments
//    1. An arrow function 
//    2. A starting initial value for our function
//    When reduce runs, it's going to take this starting argument and pass it into this arrow function that as the first argument and then whatever gets returned
//    from that inner function will be then used as the starting argument for every successive run of the function. In total, the function runs one time for every 
//    element within the array right there.
//
// 2. Debugger steps:
//    1. Add a 'debugger' statement in your function
//    2. Call the function manually
//    3. At the terminal, run 'node inspect index.js'
//    4. To continue execution of the file, press 'c' then 'enter'
//    5. To launch a 'repl' session, type 'repl' then 'enter'
//    6. To exit 'repl', press Control + C

// function reverse(str) { // Personal attempt
//     let reversed = ""; 

//     const splitted = str.split("");
//     for (let i = splitted.length-1; i >= 0; i--) {
//         reversed = reversed + splitted[i];
//     }

//     return reversed;
// }

// function reverse(str) { // Instructor's solution 1
//     return str.split("").reverse().join("");
// }

// function reverse(str) { // Instructor's solution 2
//     let reversed = "";

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }