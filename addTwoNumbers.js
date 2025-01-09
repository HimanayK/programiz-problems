//Simple 

const number1 = 2;
const number2 = 8;

const sum = number1 + number2;
console.log(`sum of ${number1} and ${number2} is : ${sum}`);



//Arrow Function

const add = (a,b) => {
   return a + b;
}
const firstNumber = 4;
const secondNumber = 4;
const sum1 = add(firstNumber, secondNumber);
console.log(`sum of ${firstNumber} and ${secondNumber} is : ${sum1}`);



//Function declaration

function addNumbers(num1, num2) {
    return num1 + num2;
}

const sum2 = addNumbers(4,5);
console.log(sum2);