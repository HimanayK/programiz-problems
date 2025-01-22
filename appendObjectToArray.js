//Append Object to Array Using push()
function append(arr, obj) {
    arr.push(obj);
    console.log(arr); //[ 1, 2, 3, 4, 5, { x: 10, y: 15 } ]

}
append([1,2,3,4,5], {x: 10, y: 15});

//Append Object to Array Using splice(start, delete count, add item1, item2 .........)
function append1(arr, obj) {
    arr.splice(0, 0, obj);
    console.log(arr); //[ { x: 10, y: 115 }, 1, 2, 3, 4, 5 ]

}
append1([1,2,3,4,5], {x: 10, y: 115});

//Append Object to Array Using ...spread operator
function append2(arr, obj) {
    let array = [...arr, obj];
    console.log(array);   //[ 1, 2, 3, 4, 51, { x: 1000, y: 115 } ]

}
append2([1,2,3,4,51], {x: 1000, y: 115});

