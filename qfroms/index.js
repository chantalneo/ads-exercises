// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
}

module.exports = Queue;

// Personal attempt
// constructor() {
//     this.stackOne = new Stack();
//     this.stackTwo = new Stack();
// }

// add(record) {
//     this.stackOne.push(record);
// }

// remove() {
//     let removed;
//     while (this.stackOne.peek()) {
//         this.stackTwo.push(this.stackOne.pop());
//     }
//     removed = this.stackTwo.pop();
//     while (this.stackTwo.peek()) {
//         this.stackOne.push(this.stackTwo.pop());
//     }
//     return removed;
// }

// peek() {
//     let peeked;
//     while (this.stackOne.peek()) {
//         this.stackTwo.push(this.stackOne.pop());
//     }
//     peeked = this.stackTwo.peek();
//     while (this.stackTwo.peek()) {
//         this.stackOne.push(this.stackTwo.pop());
//     }
//     return peeked;
// }