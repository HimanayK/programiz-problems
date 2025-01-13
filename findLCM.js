//The Least Common Multiple (LCM): smallest positive integer that is perfectly divisible by both integers.
//For example, the LCM of 6 and 8 is 24.

// program to find the LCM of two integers

function findLCM (num1, num2) {
    // higher number among number1 and number2 is stored in lcm
    let lcm = (num1 > num2) ? num1 : num2;
    
    // The while loop continues until the condition(if statement) is met
    while (true) {
        if (lcm % num1 == 0 && lcm % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is : ${lcm}`);
            break;
        }
        lcm ++;
 } 
}

findLCM(9, 10);


// Explanation of While loop
/*
The variable lcm is divided by both the num1 and num2.
If both numbers' remainders are equal to 0, then it is the LCM and the break statement terminates the program.
If both numbers' remainders are not equal to 0, the value of lcm is increased by 1 and the loop continues.
*/


//calculate LCM using hcf

function findLCM1 (number1, number2) {
    let hcf;
    let lcm;
    for (i=1; i<=number1 && i<=number2; i++) {
        if(number1 % i == 0 && number2 % i == 0) {
            hcf = i;  
        }  
    }

    lcm =  (number1 * number2) / hcf;
    console.log(`LCM of ${number1} and ${number2} is : ${lcm}`);
}

findLCM1(8, 12);    // 24