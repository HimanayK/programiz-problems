//random number b/w 2 numbers
// randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

const min = 5;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);