// program to remove duplicate value from an array using indexOf() and push()
function removeDublicates(arr) {
    let uniqueArray = [];

    for (let value of arr) {
        if(uniqueArray.indexOf(value) === -1) {
            uniqueArray.push(value);
        }
    }
    console.log(uniqueArray);   //[ 1, 2, 3, 4, 5 ]
}
removeDublicates([1,1,2,2,3,4,5,5]);

/*
indexOf() method returns -1 if the element is not in the array. 
Hence, during each iteration, if the element equals -1, the element is added to uniqueArr using push()
*/



//Using Set - to create a Set, you need to use the new Set() constructor ..................................
function removeDublicates1(arr) {
    let uniqueArray = [...new Set(arr)];  //arr is converted to Set and all duplicate elements are automatically removed.
    console.log(uniqueArray);   //[ 1, 2, 3, 4, 5, 6 ]
}
removeDublicates1([1,1,2,2,3,4,5,5,6,6]);



//new Set() -> to store multiple items like numbers, strings, objects, etc. A set cannot contain duplicate values.
//Access Set Elements -> const set1 = new Set([1, 2, 3]);  set1.values()
//has() -> check if the element is in a Set. set1.has(1)
//add() -> set.add(3);
// delete() -> removes a specific element from a Set. set.delete(2);
//clear() -> method removes all elements from a Set.  set.clear();