
// program for a simple calculator

function calculate(num1, num2, operator) {
    let result;
    if (operator == '+') {
        result = num1 + num2;
    } 
    else if (operator == '-') {
        result = num1 - num2;
    } 
    else if (operator == '*') {
        result = num1 * num2;
    } 
    else {
        result = num1 / num2;
        
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
}

calculate(12.5, 6, '+');



// Using switch statement
function calculate1(num1, num2, operator) {
    let result1;

    switch(operator) {
    case '+':
        result1 = num1 + num2;
        break;
    
    case '-':
        result1 = num1 - num2;
        break;

    case '*':
        result1 = num1 * num2;
        break; 

    default:
        result1 = num1 / num2;
        break;
}
console.log(`${num1} ${operator} ${num2} = ${result1}`);

}
calculate1(12.5, 6, '+');
