//Add Element to Array Using unshift()
function addAtStart(arr, item) {
    arr.unshift(item);
    console.log(arr);   //[ 10, 1, 2, 3, 4, 5 ]
}
addAtStart([1,2,3,4,5], 10);


//Add Element to Array Using splice()----------------------------------------------------------
function addAtStart1(arr, item) {
    arr.splice(0,0,item);
    console.log(arr);   //[ 15, 1, 2, 3, 4, 5 ]
}
addAtStart1([1,2,3,4,5], 15);


//Add Element to Array Using Spread Operator --------------------------------------------------
function addAtStart2(arr, item) {
    let Array = [item, ...arr];
    console.log(Array);   //[ 20, 1, 2, 3, 4, 5 ]
}
addAtStart2([1,2,3,4,5], 20);

//Add Element to Array Using concat() -------------------------------------------------------------------
function addAtStart3(arr, item) {
    let Array = [item].concat(arr);
    console.log(Array);   //[ 25, 1, 2, 3, 4, 5 ]
}
addAtStart3([1,2,3,4,5], 25);