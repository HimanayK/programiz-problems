const today = new Date();   // gives the current date and time
const current = today.toDateString();   // returns the date portion of a date object.
console.log(current);   //Tue Jan 21 2025

const time = today.toLocaleTimeString();    //returns the time portion of a date object
console.log(time);    //22:19:02