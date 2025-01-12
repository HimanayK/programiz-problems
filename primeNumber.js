// checking prime number between 0 and 100(inclusive) using random() method

let number = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
let flag = false;

// Since we know that 1 is neither prime nor composite.
if (number == 1) {
    console.log("1 is neither prime nor composite");
}
// any positive number greater than 1.
else if (number > 1) {

 for(i = 2; i <= Math.sqrt(number); i++) {  
    if (number % i == 0) {
        flag = true;
        break;
    }
 }
// If the flag is found true, it means a divisor was found during the iteration.
 let isPrime = (flag == true) ? `${number} is not a prime number ❌` : `${number} is a prime number ✔️`;
 console.log(isPrime);

}
// If the number is less than 1 (either 0 or negative)
// then we can say it is not a prime number.
else {
    console.log(`${number} is not a prime number ❌`);
}





   


