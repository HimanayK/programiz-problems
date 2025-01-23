//Empty Array by Substituting New Array
function makeEmpty(arr) {
    arr = [];    
    console.log(arr);   //[] 
}
makeEmpty([1,2,3,4,5,6]);

//Empty Array Using splice(start, deltete count, add items.....) ---------------------------
function makeEmpty1(arr1) {
    arr1.splice(0, arr1.length);
    console.log(arr1)   //[]
}
makeEmpty1([1,2,3,4,5,6]);


//Empty Array by Setting Length 0 -------------------------------------------
function makeEmpty2(arr2) {
    arr2.length = 0;
    console.log(arr2)   //[]
}
makeEmpty2([1,2,3,4,5,6]);