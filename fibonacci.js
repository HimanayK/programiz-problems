// he Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. 
// After that, the next term is defined as the sum of the previous two terms.


// program to generate fibonacci series up to n terms  -n1 for loop
function fibonacciNTerms(num) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    console.log("Fibonacci Sequence Up to n terms:");
    for( let i = 1; i<=num; i++) {
       console.log(n1);  
       nextTerm = n1 + n2; 

       n1 = n2;
       n2 = nextTerm;
    }
}
fibonacciNTerms(5);   // 0 1 1 2 3


//Fibonacci Sequence Up to a Certain Number  - nextTerm while loop
function fibonacciSeries(number) {
    let n1 = 0;
    let n2 = 1;
    console.log("Fibonacci Sequence Up to a Certain Number:");
    console.log(n1);
    console.log(n2);
    let nextTerm = n1 + n2;
    

    while (nextTerm <= number) {
        console.log(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}
fibonacciSeries(5);   // 0 1 1 2 3 5



