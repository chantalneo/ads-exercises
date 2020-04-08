// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1; 
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1; 

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        
        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;
}

matrix(4);

module.exports = matrix;

// Notes:
// 1. Key feature or behavior of arrays that is really important here for our solution is the fact that we can assign values to indices inside of an array
//    that has not been initialized.
//    E.g.,
//    const arr = [];
//    arr[3] = "Hi there!" 
//    and arr would become [null, null, null, "Hi there!"]

// function matrix(n) { // Personal solution
//     const mainArray = [];
//     for (let i = 0; i < n; i++) {
//         let subArray = new Array(n);
//         mainArray.push(subArray);
//     }
    
//     let startRow = 0;
//     let endRow = n-1;
//     let startColumn = 0;
//     let endColumn = n-1;

//     let counter = 1;
    
//     while (startColumn <= endColumn && startRow <= endRow) {
//         for (let i = startColumn; i <= endColumn; i++) {
//             mainArray[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;
//         for (let i = startRow; i <= endRow; i++) {
//             mainArray[i][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;
//         for (let i = endColumn; i >= startColumn; i--) {
//             mainArray[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;
//         for (let i = endRow; i >= startRow; i--) {
//             mainArray[i][startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//     }
//     console.log(mainArray);
//     return mainArray;
// }