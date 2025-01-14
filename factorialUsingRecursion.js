// Factorial of a number is the product of all the number from 1 to that number.
// Example: 5! = 1*2*3*4*5 = 120
// (n!) = 1*2*3*4 ------- n

function factorial(number) {
    if(number > 0) {
        return number * factorial(number - 1);
    }
    else {
        return 1;
    }

}
const result = factorial(4);
console.log(result);


/*
factorial(4) returns 4 * factorial(3)
factorial(3) returns 4 * 3 * factorial(2)
factorial(2) returns 4 * 3 * 2 * factorial(1)
factorial(1) returns 4 * 3 * 2 * 1 * factorial(0)
factorial(0) returns 4 * 3 * 2 * 1 * 1
*/