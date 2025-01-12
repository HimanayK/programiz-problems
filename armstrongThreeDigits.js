function armstrongNumber(number) {
    let sum = 0;
    let temp = number;

    while (temp > 0) {                   //1st iteration      //2nd iteration   //3rd iteration
        digit = temp % 10;            // 153 % 10 = 3         // 15 % 10 = 5   // 1 % 10 = 1
        sum += digit ** 3;            // 3*3*3 = 27           // 25           // 1   total sum = (27+25+1)=153
        temp = parseInt(temp / 10); // 153 / 10 = 15.3 = 15   // 1.5 = 1     // 0.1 = 0
    }

    if (sum == number) {
        console.log(`${number} is an armstrong number`);
    } else {
        console.log(`${number} is not an armstrong number`);
    }



}
armstrongNumber(152);