// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while(sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }
        
        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }

    return q;
}

   const queueOne = new Queue();
   queueOne.add(1);
   queueOne.add(2);
   const queueTwo = new Queue();
   queueTwo.add('Hi');
   queueTwo.add('There');
   queueTwo.add('What');
   const q = weave(queueOne, queueTwo);

module.exports = weave;

// Notes: 
// 1. Source Queue One ['Hi', 'To', 'You'] \
//                                          > Result [1, 'Hi', 2, 'To', 3, 'You']
//    Source Queue Two [1, 2, 3]           /
//
//    Different Length Queue One [1, 2, 3] \
//                                          > Result [1, 2, 'Hi', 3]
//    Different Length Queue Two ['Hi']    /
//    We gotta make sure that our solution won't over remove from any queue and end up with undefined.

// function weave(sourceOne, sourceTwo) { // Personal attempt
//     const weaved = new Queue();
//     while(sourceOne.peek() || sourceTwo.peek()) {
//         if (sourceOne.peek()) {
//             weaved.add(sourceOne.peek());
//             sourceOne.remove();
//         }
//         if (sourceTwo.peek()) {
//             weaved.add(sourceTwo.peek());
//             sourceTwo.remove();
//         }
//     }
//     console.log(weaved);
//     return weaved;
// }