// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    // Base case: If (row === n) then we have hit the end of our problem
    if (row === n) {
        return;
    }
    // If the 'stair' string has a length === n then we are at the end of a row
    if (n === stair.length) {
        console.log(stair)
        return steps(n, ++row); // Or could just steps(n, row + 1) like instructor
    }
    // If the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space

    // if (stair.length <= row) { // Instructor's
    //     stair += "#";
    // } else {
    //     stair += " ";
    // }

    // stair.length <= row ? stair += "#" : stair += " "; // Instructor's equivalent
    // steps(n, row, stair);
    
    const add = stair.length <= row ? "#" : " ";
    steps(n, row, stair + add);
}

steps(12);

module.exports = steps;

// Notes:
// 1. Visualization solution 1
//    When n = 3,
//          Column
//           0 1 2
//         -------->
//       0 | # _ _
//   Row 1 | # # _
//       2 | # # # 
//         V
//
// 2. Review on recursion...
//    function printNumber(n) {
//       if (n === 0) { // Base case - to stop the recursion
//          return;
//       } else {
//          console.log(n)
//          printNumber(n-1)
//       }
//    }
//    printNumber(5);
//
//    Recursion tips...
//    1. Figure out the bare minimum pieces of information to represent your problem
//       - I.e. it was our current counter. No extra piece of info like e.g., the previous number called or some random object that we're not doing anything with, were passed
//    2. Give reasonable defaults to the bare minimum pieces of info
//       - I.e. we had said that we were going to provide the number and then always subtract 1 to get towards our base case right there
//       - Could also change the decrement step, e.g., printNumber(n-dec) alongside with function printNumber(n, dec = 1), printNumber(n, 2) to substract by 2. 
//         Give a default to dec to avoid falling into infinite loop if user didn't pass in an optional value for dec
//    3. Check the base case. Is there any work left to do? If not, return
//    4. Do some work. Call your function again, making sure the arguments have changed in some fashion

// function steps(n) { // Personal attempt
//     for (let i = 1; i <= n; i++) {
//         console.log("#".repeat(i) + " ".repeat(n-i));
//     }
// }

// function steps(n) { // Instructor's solution 1
//     // From 0 to n - for row 
//     for (let row = 0; row < n; row++) {
//         // Create an empty string, 'stair'
//         let stair = '';
//         // From 0 to n - for column
//         for (let column = 0; column < n; column++) {
//             // IF the current column is equal to or less than the current row
//             if (column <= row) {
//                 // Add a '#' to 'stair'
//                 stair += '#';
//             } else { // ELSE
//                 // Add a space to 'stair'
//                 stair += ' ';
//             }
//         }
//         // Console log 'stair'
//         console.log(stair);
//     }
// }