// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            for (let child of node.children) { // Or simply use arr.push(...node.children);
               arr.push(child);
            }

            fn(node);
       }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            
            for(let i = node.children.length - 1; i >= 0; i--){ // Or simply use arr.unshift(...node.children);
                arr.unshift(node.children[i]);
            }

            fn(node);
       }
    }
}

module.exports = { Tree, Node };

// Notes
// 1. Node's Add function should create a new node and add it to the currrent node's 'children' array when given some data
// 2. Node's Remove function should look at each child of the current node and remove any node with its data === data when given some data
// 3. Why do we care about the sequence we traverse the data? 
//    - E.g. breadth-first 
//      An example would be to list out the hierarchy, the rank...
//      CEO, CTO, CMO, COO, VP Engineering, VP Infrastructure, VP Design, Product Manager
//              [CEO]
//              / | \
//             /  |  \
//            /   |   \
//        [CTO] [CMO] [COO]
//        / | \           \
//       /  |  \           \
//      /   |   \           \
// [VP   [VP     [VP       [Product
// Eng.] Infra.] Design]   Manager]