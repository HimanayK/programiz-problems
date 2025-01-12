const checkNumber = (num) => {
  if (num % 2 == 0) {
    console.log(`${num} is even number`);
  } else {
    console.log(`${num} is odd number`);
  }
};

checkNumber(9);
checkNumber(10);



//using ternary operator
/*
const result = (num % 2 == 0) ? "Even" : "Odd";
console.log(`${num} is ${result} number`); 
*/