//Random number between 5(inclusive) and 20(inclusive)

const min = 5;
const max = 20

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number between ${min} and ${max} (inclusive) is : ${randomNumber}`);






//  Math.floor(Math.random() * (max - min + 1)) + min    (both included)
// Math.floor(Math.random() * (max - min)) + min    (max excluded)



// let randomNumber = Math.floor(Math.random() * 100);   // 0 to 99
// console.log(randomNumber);
