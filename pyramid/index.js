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
    // From 0 to n (iterate through rows)
        // Create an empty string, 'level'
        // From 0 to ??? (columns)
            // IF the column should have a #
                // Add a '#' to 'level'
            // ELSE
                // Add a space to 'level'
        // Console log 'stair'
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