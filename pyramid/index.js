// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) { 
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

pyramid(4)

module.exports = pyramid;

// function pyramid(n, row = 0, layer = '') { // Personal attempt
//     const layerWidth = n + (n-1);
// 	if (n === row) {
//         return;
//     }
//     if (layer.length === layerWidth) {
//   	    console.log(layer);
//         return pyramid(n, ++row);
//     }
//     if (layer.length + 1 >= n-row && layer.length + 1 <= n+row) {
//   	    layer += '#';
//     } else {
//         layer += ' ';
//     }
//     pyramid(n, row, layer);
// }

// function pyramid(n) { // Personal attempt at instructor's solution 1 pseudo code
//     // From 0 to n (iterate through rows)
//     for (let row = 0; row < n; row++) {
//         // Create an empty string, 'level'
//         let level = '';
//         // From 0 to ??? (columns)
//         for (let column = 0; column < n + (n-1); column++) { 
//             // IF the column should have a #
//             if (column+1 >= n-row && column+1 <= n+row) {
//                 // Add a '#' to 'level'
//                 level += '#';
//             } else { // ELSE
//                 // Add a space to 'level'
//                 level += ' ';
//             }
//         }
//         // Console log 'level'
//         console.log(level);
//     }
// }