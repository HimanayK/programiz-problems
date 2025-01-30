/*
A queue is a data structure that follows the First In First Out (FIFO) principle.

The first element added to the queue is the first one to be removed. 
This is like being in a queue to get a movie ticket. The first one in the queue gets the ticket first.  */

// implement queue -----------------------------------------------------------------------------------------------
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    //adds a new element
    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }
    //removes an element from head of the queue
    dequeue() {
        let removeElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removeElement;

    }
    //shows the head element of the  queue
    peek() {
        return this.items[this.headIndex];
    }
    //shows the number of items in queue
    size() {
        return this.tailIndex - this.headIndex;
    }
    //checks if queue is empty or not
    isEmpty() {
        if(this.tailIndex - this.headIndex == 0) {
            return true;
        } else {
            return false;
        }
    }
    //empty the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
let queue = new Queue();
// add items to queue
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);
console.log(queue.items);  //{ '0': 8, '1': 6, '2': 4, '3': 2 }
queue.dequeue();  // delete first item
console.log(queue.items);  //{ '1': 6, '2': 4, '3': 2 }
console.log(queue.peek());  //6  shows first item of queue
console.log(queue.isEmpty());  //false
queue.clear();                  //clears the queue
console.log(queue.items);    //{}

/*
Queue object is created using a new operator and various methods are accessed through the object.

Initially, this.items is an empty object which is treated as a queue.
The enqueue() method adds elements to the queue.
The dequeue() method removes the first element from the queue.
The peek() method returns the first element from the queue.
The size() method shows the total number of elements in the queue.
The isEmpty() method returns a boolean checking if the queue is empty or not.
The clear() method clears and resets the queue.
*/

