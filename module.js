//module.js file
const message = 'hello World!';
const number = 10;
function greet(name) {
    console.log(`Hello ${name}`);
}
function multiplyTwoNumbers(a,b) {
    console.log(`${a} x ${b} = ${a*b}`);
}

export {message, number, greet, multiplyTwoNumbers};
