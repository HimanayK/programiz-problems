// program to check if an object is an array using Array.isArray(arr_name)
function checkType(arr) {
    let isArray = Array.isArray(arr);

    if(isArray) {
        console.log('Yes.............');
    } else {
        console.log('No.............');

    }
}
checkType([1,2,3,4,5,6,7]);   //Yes.............

/*
Array.isArray() method is used to check if an object is an array.
The Array.isArray() method returns true if an object is an array, otherwise returns false. */