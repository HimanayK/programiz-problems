

// program to find Armstrong number between intervals 8 to 153


for (let i = 8; i <= 153; i++) {
    let temp = i;
    let numberOfDigits = i.toString().length;
    let sum = 0

    while (temp > 0) {
        let digit = temp % 10;            //gives remainder
        sum += digit ** numberOfDigits;   
        temp = parseInt(temp / 10);       // removing last digit from the number // convert float into integer
    }

    if (sum == i) {
        console.log(`${i} is an armstrong number✔️`);
    } else {
        console.log(`${i} is not an armstrong ❌`);
    }
}