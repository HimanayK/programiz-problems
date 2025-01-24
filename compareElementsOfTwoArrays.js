//Compare Arrays Using JSON.stringify()
function compare(arr1, arr2) {
    if(JSON.stringify(arr1) == JSON.stringify(arr2)) {
        console.log('Both arrays are same ✔️');
    } else {
        console.log('Both arrays are different ❌');
    }

}
compare([1,2,3], [1,2,3]);    //Both arrays are same ✔️
/*
JSON.stringify() method converts an array into JSON string  // '[1,2,3]'
*/

// Compare Arrays using for Loop ---------------------------------------------------------------------
function compare1(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    } else {
        for ( let i=0; i<arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            } else {
                return true;
            }
        }
    }
}
const result = compare1([1,2,3], [1,2,3]);
if (result) {
    console.log('Both arrays are same ✔️');
} else {
    console.log('Both arrays are different ❌');
}