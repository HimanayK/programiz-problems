//program to check if a variable is of function type using instanceof operator ---------------------------------
function checkType(variable) {
    if(variable instanceof Function) {
        console.log('Yes, it is a function');
    } else {
        console.log('It is not a function');
    }
}
const x = 'hello';
const y = function() {
    console.log('Hello world!');
}
checkType(x);  //It is not a function
checkType(y); //Yes, it is a function

//program to check if a variable is of function type using typeof operator ---------------------------------
function checkType1(variable) {
    if(typeof variable == 'function') {
        console.log('Yes, it is a function');
    } else {
        console.log('It is not a function');
    }
}
const a = 'hello';
const b = function() {
    console.log('Hello world!');
}
checkType1(a);  //It is not a function
checkType1(b); //Yes, it is a function