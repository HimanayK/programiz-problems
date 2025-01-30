// program to pass a function as a parameter
function greeting(func, user) {
    const message = func()
    console.log(`${message} ${user}`);  //hello Himani
}

function greet() {
   return 'hello';
}
greeting(greet, 'Himani'); 