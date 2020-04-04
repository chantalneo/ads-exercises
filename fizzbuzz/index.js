// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Is the number a multiple of 3 and 5?
        if (i % 3 === 0 && i % 5 === 0) { // Can also simply use i % 15 === 0 to be more terse and make the statement easier to read
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            // Is the number a multiple of 3?
            console.log('fizz');    
        } else if (i % 5 === 0) {
            // Is the number a multiple of 5?
            console.log('buzz');
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;

// Notes:
// 1. Use modulo operator to determine the remainder of a number during division.
//    So for example if we took 9 % 3, it returns zero. In this case it is zero because because if we divide 9 by 3, 3 goes into 9 exactly three times 
//    and there is no remainder left over. However, if we divide 10 by 3, well then 3 goes into 10 still three times and there's one left over. I.e
//    10 % 3 returns 1.

// function fizzBuzz(n) { // Personal attempt
//     for (let i = 1; i <= n; i++) {
//         if (i%3 === 0 && i%5 === 0) {
//             console.log('fizzbuzz');
//         }
//         else if (i%3 === 0) {
//             console.log('fizz');
//         }
//         else if (i%5 === 0) {
//             console.log('buzz');
//         }
//         else {
//             console.log(i)
//         }
//     }
// }