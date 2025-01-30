//// program to perform function overloading ------------------------------------
function sum() {
    if(arguments.length == 0) {
        console.log('No arguments are passed');
    }
    else if(arguments.length == 1) {
        console.log('pass atleast 2 arguments');
    }
    else {
        let result = 0;
        for (let i=0; i<arguments.length; i++) {
            result += arguments[i];
        }
        console.log(result);
    }
}

sum(); //No arguments are passed
sum(1); //pass atleast 2 arguments
sum(5,9); //14
sum(1,2,3,4);  //10
//In JavaScript, the arguments object is automatically available inside a function that represents
//  the passed arguments to a function.
