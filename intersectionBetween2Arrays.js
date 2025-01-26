//perform intersection between two arrays using indexOf() and push()
// intersection contains the elements of array1 that are also in array2
function intersection(arr1, arr2) {
    let intersectionResult = [];

    for(let value of arr2) {
        if(arr1.indexOf(value) != -1) {
            intersectionResult.push(value);
        }
    }
    return intersectionResult;    //[ 1, 5, 8 ]
}
console.log(intersection([1,2,5,8,9], [1,3,5,8,10]));


//Perform Intersection Using new Set() ------------------------------------------------------------
function intersection1(arr1, arr2) {
    // converting into Set
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for(let value of setB) {
        if(setA.has(value)) {   //has() method is used to check if the element is in the first Set
            intersectionResult.push(value);
        }
    }
    return intersectionResult;    //[ 1, 5, 9 ]
}
console.log(intersection1([1,2,5,8,9], [1,3,5,9,10]));


//intersection using filter method() -----------------------------------------------------------------------------
//-> iterates over an array and returns the array elements that pass the given condition
function intersection2(arr1, arr2) {
    let intersectionResult = arr2.filter((value) => arr1.indexOf(value) !== -1) //or arr1.includes(value) ; 
    return intersectionResult;    //[ 1, 3, 10 ]
}
console.log(intersection2([1,3,10,8,9], [1,3,5,91,10]));