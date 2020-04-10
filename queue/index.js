// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();       // Create a new empty queue
//     q.add(1);                    // Add a record to a queue
//     q.remove(); // returns 1;    // Remove record at the end of a queue

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }
}

// Notes: 
// 1. const arr = [2, 3, 4];
//    arr.unshift(1);
//    arr becomes [1, 2, 3, 4]

module.exports = Queue;
