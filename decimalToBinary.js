// program to convert decimal to binary

function decToBin(num) {
    let number = num.toString(2);    // radix 2 is the base value for binary
    return number;
}

console.log(decToBin(8));



// without using toString(radix)
function dec2Bin(num) {
    let remainder = '';     // it concatenates the remainder values instead of adding
    while(num > 0) {
        remainder = (num % 2) + remainder;    // 4 + '' = '4'
        num = Math.floor(num / 2);           // 4/2 = 2   // 2/2 = 1   // 1/2 = 0.5 = 0
    }
    return remainder;

}
console.log(dec2Bin(8));



/*
Step 1: 8/2,  Quotient = 4, Remainder = 0
Step 2: 4/2,  Quotient = 2, Remainder = 0
Step 3: 2/2,  Quotient = 1, Remainder = 0
Step 4: 1/2,  Quotient = 0, Remainder = 1

Binary: 1000  (write remainder from bottom to top)
*/