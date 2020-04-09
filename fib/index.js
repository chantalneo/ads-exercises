// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) { // An exponential runtime, which should be avoided. So how can we improve this solution? Check out notes' point 1
    if (n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

fib(4);

module.exports = fib;

// Notes:
// 1. Memoization
//    Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the 
//    precomputed result, rather than running the function again

// function fib(n) { // Personal attempt
//     const result = [0, 1];

//     for (let i = 0; i <= n; i++) {
//         result[i] = result[i-1] + result[i-2] || result[i];
//     }

//     return result[n];
// }

// function fib(n) { // Instructor's solution 1, a linear runtime
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[i-1];
//         const b = result[i-2];

//         result.push(a + b);
//     }

//     return result[n];
// }