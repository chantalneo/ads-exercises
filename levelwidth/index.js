// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node');

function levelWidth(root) {
    const arr = [root, 's'];
    const result = [];
    let counter = 0;

    while (arr.length) {
        const node = arr.shift();

        if (node === 's') {
            result.push(counter);
            counter = 0;
            if (arr.length !== 0) { 
                arr.push(node) 
            };
        } else {
            counter++;
            arr.push(...node.children);
        }
    }

    return result;
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
console.log(levelWidth(root));

module.exports = levelWidth;
