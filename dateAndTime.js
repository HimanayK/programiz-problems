//new Date() constructor is used to create a date object. It gives the date and time according to the given arguments:
const date = new Date(2025, 0, 21, 14, 5, 30);

const today = date.toDateString();
const time = date.toLocaleTimeString();

console.log('Date : ',today);    //Date :  Tue Jan 21 2025
console.log('Time : ', time);   //Time :  14:05:30


// The six numbers in new Date() specify year, month, day, hour, minute, second respectively. 
// Also, the month starts from 0. Hence, January is 0 and December is 11.
//toDateString() method returns the date portion of a Date object.
//toLocaleTimeString() method returns the time portion of a Date object.