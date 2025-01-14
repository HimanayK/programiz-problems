// Fibonacci series is a sequence of numbers in which each number is the sum of two preceding one.
// f(n) = f(n-1) + f(n-2), where f(1) = f(2) = 1

function fibonacci(n) {
    if(n < 2 ) {
        return n
    }
    else {
            return fibonacci(n-1) + fibonacci(n-2); 
        } 
}


let nTerm = 5;
for (let i = 0; i <= nTerm; i++) {
    console.log(fibonacci(i));
}


/*
0
1
1
2
3
5
*/

