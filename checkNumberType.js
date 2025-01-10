// Check if a number is positive, negative or zero

function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } 
    else if (number == 0) {
        return "Zero"
    }
    else if (number < 0) {
        return "Negative"
    }
    else {
        return "Not a number"
    }
}

console.log(`the number is ${checkNumberType(32)}`);



// Check positive, negative and zero values in the array

// using for loop
 let arr = [0, 1, 2, -3, -5, 6, 2];

 for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
         console.log("Positive");
    }
    else if (arr[i] == 0) {
        console.log("Zero");
    }
    else if (arr[i] < 0) {
         console.log("Negative");
    }
        else {
        console.log("Not a number");
    }
 }

//using map() method

// let result = arr.map((value) => {
//     if (value > 0) {
//         return "Positive";
//     }
//     else if (value == 0) {
//         return "Zero"
//     }
//     else if (value < 0) {
//         return "Negative"
//     }
//     else {
//         return "Not a number"
//     }
// });

// console.log(result);