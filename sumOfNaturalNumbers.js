
// program to display the sum of natural numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
   sum += i;
}

console.log(sum);
  

// 1 + 2 + 3 + 4 +5 = 15


// using while loop
let sum1 = 0; 
let j = 1;

while (j <= 5) {
    sum1 += j;
    j++;
}
console.log(sum);




// sum of n natural numbers 
function calculateSum(n) {
    let sum = 0;

    for (let i=0;i<=n;i++) {
        sum += i;
    }
    return sum;
}

console.log(calculateSum(10));

