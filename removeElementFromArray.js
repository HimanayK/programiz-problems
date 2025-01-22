// program to remove item from an array using indexOf() and splice()

function removeElement(array, element) {
    let index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);    //splice(startIndex, no.of delete counts) method removes the elementValue 3 at index 1
    }
    return array;      //[ 2, 4, 5, 6, 7 ]
}
const result = removeElement([2,3,4,5,6,7], 3);
console.log(result);

/*
If the element is not in the array, indexOf() returns -1
*/


//Using For Loop ------------------------------------------
function removeElement1(array, element) {
    let arr = [];
    for ( i = 0; i < array.length; i++) {
        if (array[i] !== element) {
            arr.push(array[i]);
        }
    }
    console.log(arr);  //[ 2, 3, 5, 6, 7 ]
    }
   
removeElement1([2,3,4,5,6,7], 4);
