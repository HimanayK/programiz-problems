let today = new Date();      //2025-01-21T21:09:31.700Z
let day = today.getDate();
let month = today.getMonth() + 1;   // + 1 because month starts from 0
let year = today.getFullYear();

if (day < 10) {day = '0' + day;}
if (month < 10) {month = '0' + month;}

const formatDate = `${day}/${month}/${year}`;     //21/01/2025
console.log(formatDate);

const formatDate1 = `${day}-${month}-${year}`;
console.log(formatDate1);                        //21-01-2025
console.log(today);
 