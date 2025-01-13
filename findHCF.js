// The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) 
// the largest integer that can exactly divide both integers (without a remainder).
//  For example, the HCF of 60 and 72 is 12.


function findHCF (num1, num2) {
    let hcf;

    //looping from 1 to number1 and number2
    for (i=1; i<=num1 && i<=num2; i++) {
        // check if i is factor of both integers
        if(num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }
    return hcf;
}

const num1 = 40;
const num2 = 80;
console.log(`The HCF of ${num1} and ${num2} is : ${findHCF(num1, num2)}`); 

