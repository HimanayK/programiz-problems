/*The stack is a data structure that follows Last In First Out (LIFO) principle. 
The element that is added at last is accessed at first. 
This is like stacking your books on top of each other. The book that you put at last comes first. */

// program to implement stack data structure -------------------------
class Stack {
    constructor() {
       this.items = [];
    }
    add(element) {
        return this.items.push(element);
    }
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        return this.items = [];
    }
}
let stack = new Stack();
stack.add(1); //[ 1 ]
stack.add(2); //[ 1, 2 ]
stack.add(3); //[ 1, 2, 3 ]
stack.add(4); //[ 1, 2, 3, 4 ]
console.log(stack.items);  //[ 1, 2, 3, 4 ]
stack.remove();
console.log(stack.items);  //[ 1, 2, 3]
console.log(stack.peek());  //3
console.log(stack.isEmpty());  //false
console.log(stack.size());  //3
console.log(stack.clear());  //[]

