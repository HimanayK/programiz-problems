//setTimeout(function, milliseconds) - The setTimeout() method executes a block of code after the specified time.
// The method executes the code only once.

//program to pass parameter to a setTimeout() function ------------------------------------------------
setTimeout(() => {
const data = new Date();
const currentDate = data.toDateString();
const currentTime = data.toLocaleTimeString();
console.log(currentDate); //Wed Jan 29 2025
console.log(currentTime);  //16:27:53
}, 3000);


//Passing Parameter to Function --------------------------------------

const greet = (str1, str2) => {
    console.log(str1);
    console.log(str2);
}
setTimeout(greet, 4000, 'Hello', 'World!!');
console.log('I will execute first');   //bcoz timeout take 4 seconds to execute the greet function
