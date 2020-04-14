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

    removeFirst() { // But I prefer my own solution, as it looks more concise
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while(node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }
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

// removeFirst() { // Personal attempt
//     const node = this.head;
//     this.head = node.next;
// }

// removeLast() { // Personal attempt
//     if (!this.head) {
//         return;
//     }

//     let currentNode = this.head;
//     let nextNode = currentNode.next;

//     if (!nextNode) {
//         this.head = null;
//         return;
//     }

//     while (nextNode.next) {
//         currentNode = nextNode;
//         nextNode = nextNode.next;
//     }
//     currentNode.next = null;
// }

// insertLast(data) {
//     const lastNode = this.getLast();
//     const newNode = new Node(data);
//     if (!lastNode) {
//         this.head = newNode;
//     } else {
//         lastNode.next = newNode;
//     }
// }