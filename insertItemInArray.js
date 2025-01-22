//Add Item to Array Using splice(start, delete count, add items.......)
function insert(arr, item) {
    let array = arr.splice(1,0,item);
    console.log(arr);    //[ 3, 11, 4, 5, 6, 8 ]
}
insert([3,4,5,6,8], 11);