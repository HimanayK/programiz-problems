
// program to check if a number is a float or integer value----------------------------------------------
function check(num) {
    if(typeof num == 'number' && !isNaN(num)) {
        if (Number.isInteger(num)) {
            console.log('integer value');
        } else {
            console.log('Float value');
        }
    } else {
        console.log('Not a number');
    }
}
check(-12);  //integer value
check(17)    ////integer value
check(1.4);   //float value
check('hello');  //Not a number
check(NaN);  //Not a number



// program to check if a number is a float or integer value  using regex ----------------------------------------------
function check1(num) {
    const pattern = /^-?[0-9]+$/;
    const value = pattern.test(num);
    if(value) {
        console.log('Integer');
    } else {
        console.log('float value');
    }
}
check1(-12);  //integer value
check1(1.4);   //float value







/*
In the above program, the passed value is checked if it is an integer value or a float value.
The typeof operator is used to check the data type of the passed value.
The isNaN() method checks if the passed value is a number.
The Number.isInteger() method is used to check if the number is an integer value.
the pattern /^-?[0-9]+$/ looks for the integer value -->  ? means it checks 0 or 1 occurance of '-', [0-9] matches 0 to 9 number
+ matches one or more occurance of 0 -9 pattern 
*/