
// find largest number among 3 numbers using ternary operator ------------------------------------------------ 
// let num1 = 5;
// let num2 = 7;
// let num3 = 8;

// let greatest = num1 > num2 && num1 > num3 ? `${num1} is greatest` : num2 > num3 && num2 > num1 ? `${num2} is greatest` : `${num3} is greatest`;
// console.log(greatest);




function largestNumber(first, second, third) {
    if (first >= second && first >= third) {
        console.log(`${first} is the largest number`);
    } 
    else if (second >= first && second >= third) {
        console.log(`${second} is the largest number`);
    } else {
        console.log(`${third} is the largest number`);
    }
}

largestNumber(-4, -6, -6);



// using max() and min() method ---------------------------------------------------------------------------------------

let num1 = 41;
let num2 = 22.43;
let num3 = 22.55;

let largest = Math.max(num1, num2, num3);
let smallest = Math.min(num1, num2, num3);
console.log(`The largest number is : ${largest}`);
console.log(`The smallest number is : ${smallest}`);



// Math.max() returns the largest number among the provided numbers.
// Math.min() - to find the smallest among the numbers