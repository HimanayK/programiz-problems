// merge array using spread operator and remove dublicates using new Set() constructor ..................................
let arr = [1,2,2,3,3,4,4,5,5,6,6];
let arr1 = [7,7,8,8,9,9,10,10];

let mergeArr = [...new Set(arr), ...new Set(arr1)];

console.log(mergeArr);



// merge two arrays using concat() and remove dublicates using new Set() contructor -----------------------------------------
function mergeRemoveDublicate(arr1, arr2) {
    let newArray = arr1.concat(arr2);
    let uniqueArray = [...new Set(newArray)]; //newArray converted to Set, all duplicate elements automatically removed
    console.log(uniqueArray);  //[ 1, 2, 3, 4, 5 ]

}
mergeRemoveDublicate([1,2,3,4,5,5], [1,2,5,5,5,3,4]);


//Using concat() and for Loop -----------------------------------------------------------------------------
function mergeRemoveDublicate1(arr1, arr2) {
    let newArray = arr1.concat(arr2);
    let uniqueArray = [];
    for (let value of newArray) {
        if(uniqueArray.indexOf(value) === -1) {
            uniqueArray.push(value);
        }
    }
    console.log(uniqueArray);  //[ 5, 2, 3, 4, 1 ]
}
mergeRemoveDublicate1([5,2,3,4,5,5], [1,2,5,5,5,3,4]);