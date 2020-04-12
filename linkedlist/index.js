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
        if (this.head) {
            const predecessor = this.head;
            this.head = new Node(data);
            this.head.next = predecessor;
        } else {
            this.head = new Node(data);
        }
    }
}

module.exports = { Node, LinkedList };
