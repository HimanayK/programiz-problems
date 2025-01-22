//Check Array Using includes()

function check(arr, value) {
    let hasValue = arr.includes(value);
    if (hasValue) {
        console.log('array has the specific value');
    } else {
        console.log('array has not contain specific value❌');
    }
}
check([4,6,8,9,10], 6);


//Check Array Using indexOf()  ----------------------------------------
function check1(arr, value) {
    
    if (arr.indexOf(value) !== -1) {
        console.log('array has the specific value✔️');
    } else {
        console.log('array has not contain specific value❌❌');
    }
}
check1([7,8,9,10,11,12], 9);