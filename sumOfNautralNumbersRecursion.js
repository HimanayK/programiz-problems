// Recursion is a function that calls itself repeatedly somewhere within the body of the function to solve a problem. It replaces the loop

function sum(number) {
   if(number > 0) {
     return number = number + sum(number - 1);
   }
    return number;
}

const result = sum(5);
console.log(result);    //15


//Explanation 
/*
sum(5) returns 5 + sum(4)
sum(4) returns 5 + 4 + sum(3)
sum(3) returns 5 + 4 + 3 + sum(2)
sum(2) returns 5 + 4 + 3 + 2 + sum(1)
sum(1) returns 5 + 4 + 3 + 2 + 1 + sum(0)
sum(0) returns 5 + 4 + 3 + 2 + 1 + 0
*/