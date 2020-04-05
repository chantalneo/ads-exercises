// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Create empty 'chunked' array
    const chunked = [];
    // Create 'index' start at 0
    let index = 0;
    // While index is less than array.length
    while (index < array.length) {
        // Push a slice of length 'size' from 'array' into 'chunked'
        chunked.push(array.slice(index, index + size));
        // Add 'size' to 'index' 
        index += size;
    }
    return chunked;
}

module.exports = chunk;

// Notes:
// 1. Using slice function would be helpful for this problem. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//    const letters = ['a', 'b', 'c', 'd', 'e'];
//    letters.slice(0, 3) would give you ['a', 'b', 'c'], i.e. from index 0 to 3 (excluding index 3).

// function chunk(array, size) { // Personal attempt
//     let processed = [];

//     for (let i = 0; i <= array.length - 1; i += size) {
//         processed.push(array.slice(i, i + size));
//     }
    
//     return processed;
// }

// function chunk(array, size) { // Instructor's solution 1
//     // Create empty array to hold chunks called chunked
//     const chunked = [];
//     // For each element in the unchunked array
//     for (let element of array) {
//         // Retrieve the last element in chunked
//         const last = chunked[chunked.length - 1];
//         // if last element doesn't exist, or if its length is equal to chunk size 
//         if (!last || last.length === size) {
//             // Push a new chunk into 'chunked' with the current element
//             chunked.push([element]);
//         } 
//         // Else add the current element into the chunk
//         else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }