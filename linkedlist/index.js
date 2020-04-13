// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() { // But I prefer my own solution. This is a tad too lengthy
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }
}

module.exports = { Node, LinkedList };

// insertFirst(data) { // Personal attempt
//     if (this.head) {
//         const predecessor = this.head;
//         this.head = new Node(data);
//         this.head.next = predecessor;
//     } else {
//         this.head = new Node(data);
//     }
// }

// size() { // Personal attempt
//     let count = 0;
//     let ref = this.head;
//     while (ref) {
//         count++;
//         ref = ref.next;
//     }
//     return count;
// }

// getLast() { // Personal attempt
//     let node = this.head;

//     while (node.next) {
//         node = node.next;
//     }

//     return node;
// }