function armstrongNDigits(number) {
       let sum = 0;
       let numberOfDigits = number.toString().length;
       let temp = number;

       while (temp > 0) {
       let digit = temp % 10;
        sum += digit ** numberOfDigits;
        temp = parseInt(temp / 10);
       }

       if (sum == number) {
        console.log(`${number} is an Armstrong number ✔️`);
    }
    else {
        console.log(`${number} is not an Armstrong number ❌`);
    }
}


armstrongNDigits(92727);
armstrongNDigits(134566);
armstrongNDigits(153);
