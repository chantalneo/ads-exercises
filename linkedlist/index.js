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
        // this.head = new Node(data, this.head);
        this.insertAt(data, 0);
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
        // return this.head;
        return this.getAt(0);
    }

    getLast() { // But I prefer my own solution. This is a tad too lengthy
        // if (!this.head) {
        //     return null;
        // }

        // let node = this.head;
        // while (node) {
        //     if (!node.next) {
        //         return node;
        //     }
        //     node = node.next;
        // }

        // return node;
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() { // But I prefer my own solution, as it looks more concise
        // if (!this.head) {
        //     return;
        // }

        // this.head = this.head.next;
        this.removeAt(0);
    }

    removeLast() {
        // if (!this.head) {
        //     return;
        // }

        // if(!this.head.next) {
        //     this.head = null;
        //     return;
        // }

        // let previous = this.head;
        // let node = this.head.next;

        // while(node.next) {
        //     previous = node;
        //     node = node.next;
        // }
        // previous.next = null;
        this.removeAt(this.size() - 1);
    }

    insertLast(data) {
        // const last = this.getLast();

        // if (last) {
        //     // There are some existing nodes in our chain
        //     last.next = new Node(data);
        // } else {
        //     // The chain is empty!
        //     this.head = new Node(data);
        // }
        this.insertAt(data, this.size());
    }

    getAt(index) {
        // if (!this.head) { // Not necessary since we're already returning null below
        //     return null;
        // }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index = this.size()) {
        if (!this.head) {
            this.head = new Node(data); 
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() { // This defines a generator function with the key of Symbol.iterator
        let node = this.head;
        while (node) {
            yield node; // For every step along the node we will yield the current node
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };

// Notes:
// 1. We could enforce code reuse in LinkedList.
//    insertFirst(data) -> insertAt(data, 0)
//    insertLast(data) -> insertAt(data, this.size() - 1)
//    removeFirst() -> removeAt(0);
//    removeLast() -> removeLast(this.size() - 1)
//    getFirst() -> getAt(0)
//    getLast() -> getAt(this.size() - 1)
 
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

// insertLast(data) { // Personal attempt
//     const lastNode = this.getLast();
//     const newNode = new Node(data);
//     if (!lastNode) {
//         this.head = newNode;
//     } else {
//         lastNode.next = newNode;
//     }
// }

// getAt(index) { // Personal attempt
//     let node = this.head;

//     if (node && index <= this.size() - 1) {
//         for (let i = 1; i <= index; i++) {
//             node = node.next;
//         }
//     }

//     return node;
// }

// removeAt(index) { // Personal attempt
//     let counter = 0;
//     let previousNode;
//     let currentNode = this.head;

//     while (currentNode) {
//         if (counter === index) {
//             if (!previousNode) {
//                 this.head = currentNode.next;
//             } else {
//                 previousNode.next = currentNode.next;
//             }
//             return;
//         }
//         counter++;
//         previousNode = currentNode; 
//         currentNode = currentNode.next;
//     }
// }

// insertAt(data, index = this.size()) { // Personal Attempt
//     if (!this.head) {
//         this.head = new Node(data); 
//         return;
//     }

//     if (index === 0) {
//         const predecessor = this.head; 
//         this.head = new Node(data, predecessor);
//         return;
//     }

//     const previous = this.getAt(index - 1);
//     if (!previous) {
//         this.getLast().next = new Node(data);
//         return;
//     }
//     const next = previous.next || null;
//     previous.next = new Node(data, next);
// }