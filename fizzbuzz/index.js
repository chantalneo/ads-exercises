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
    for(var i = 1; i <= n; console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i), i++); // Check out notes' point 2
}

module.exports = fizzBuzz;

// Notes:
// 1. Use modulo operator to determine the remainder of a number during division.
//    So for example if we took 9 % 3, it returns zero. In this case it is zero because because if we divide 9 by 3, 3 goes into 9 exactly three times 
//    and there is no remainder left over. However, if we divide 10 by 3, well then 3 goes into 10 still three times and there's one left over. I.e
//    10 % 3 returns 1.
// 
// 2. Although out of curiosity, I have explored into a one-liner fancy solution that the instructor had briefly mentioned, he had suggested to kind of 
//    leave the solution in its long form like what we have done and not try to make it fancy or condense it down to anything else. This is because, 
//    there are certain interview questions where the interviewer wants to see that you understand there are advanced syntax and they want to see that 
//    you know how some neat helpers inside javascript works. However, if you start putting what is otherwise very straightforward legible code like this 
//    into some really fancy one liner, honestly it's kind of ironic. Their first inclination is to say something like wow you took some really easy code 
//    and you turned in as some fancy one liner that's really hard to understand. And so it's like well you know on some questions they want you to go above 
//    and beyond and use some fancy javascript. But on this one, they really want it to be just straightforward and simple.

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

// for (let i = 1; i <= n; i++) { // Instructor's solution 1
//     // Is the number a multiple of 3 and 5?
//     if (i % 3 === 0 && i % 5 === 0) { // Can also simply use i % 15 === 0 to be more terse and make the statement easier to read
//         console.log('fizzbuzz')
//     } else if (i % 3 === 0) {
//         // Is the number a multiple of 3?
//         console.log('fizz');    
//     } else if (i % 5 === 0) {
//         // Is the number a multiple of 5?
//         console.log('buzz');
//     } else {
//         console.log(i)
//     }
// }