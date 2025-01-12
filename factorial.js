function findFactorial(number) {
    if (number < 0) {
        console.log("Error! Factorial of negative number doesn't exist");
    }
    else if (number == 0) {
        console.log(`Factorial of ${number} is : 1`);
    }
    else {
        let factorial = 1;
        for (let i = 1; i <= number; i ++) {
            factorial *= i;
        }
        console.log(`Factorial of ${number} is : ${factorial}`);
    }
}

let randomNumber = Math.floor(Math.random() * 12) + 1;

findFactorial(randomNumber);








// The factorial of a number is the product of all the numbers from 1 to that number.
// example: factorial of n (n!) = 1 * 2 * 3 * 4.....n