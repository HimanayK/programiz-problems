function checkLastDigit (num1, num2, num3) {
    let result1 = num1 % 10;
    let result2 = num2 % 10;
    let result3 = num3 % 10;

    if (result1 == result2 && result1 == result3) {
        console.log(`The last digits of ${num1}, ${num2} and ${num3} are same✔️`);
    }
    else {
        console.log(`The last digits of ${num1}, ${num2} and ${num3} are not same❌`)
    }
}
checkLastDigit(48, 8, 248);