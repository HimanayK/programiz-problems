// factors are the the divisor of a number that exactly divide the number (with 0 remainder)
// for example factors of 6 are 2, 3, 6

function factors(number) {
    for (let i=1; i<=number; i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
}
factors(12);


/*
The for loop is used to loop through 1 to the number entered by the user.
The modulus operator % is used to check if num is exactly divisible.
In each iteration, a condition is checked if num is exactly divisible by i
*/