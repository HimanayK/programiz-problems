//Random number between 5(inclusive) and 20(inclusive)

const min = 5;
const max = 20

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number between ${min} and ${max} (inclusive) is : ${randomNumber}`);






//  Math.floor(Math.random() * (max - min + 1)) + min    (both inclusive)
// Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber    (highestNumber exclusive)