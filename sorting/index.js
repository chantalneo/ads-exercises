// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // Implement bubble sort
    // Pseudo code:
    // From i = 0 to < array length
        // From j = 0 to (array length - i)
            // If the element at j is greater than j+1
                // Swap elements at j and j+1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    // Return the sorted array
    return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// Notes:
// BubbleSort, Worst Case Runtime of n^2, Difficulty of Easiest to Implement
// SelectionSort, Worst Case Runtime of n^2, Difficulty of Easier to Implement
// MergeSort, Worst Case Runtime of n*log(n), Difficulty of Medium to Implement