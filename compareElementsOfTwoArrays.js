// Compare Arrays using for loop ------------------------------------------------------------------
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];
let isSame = true;
if (arr1.length !== arr2.length) {
    isSame = false;
} 
else {
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            isSame = false;
            break;
        } else {
            isSame = true;
        }
    }
}

if(isSame) {
    console.log('same');
} else {
    console.log('Not same');
}


//Compare Arrays Using JSON.stringify() ----------------------------------------------------------------------
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

// Compare Arrays using for Loop in function ---------------------------------------------------------------------
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