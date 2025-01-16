// Convert First letter to UpperCase
let myName = 'himani';
let newName = myName.charAt(0).toUpperCase() + myName.slice(1);
console.log(newName);
/* 
string's first character is extracted using charAt() method. Here, str.charAt(0); gives h.
toUpperCase() method converts the string to uppercase. Here, str.charAt(0).toUpperCase(); gives H.
The slice() method returns the rest of the string.
Here, str.slice(1); gives imani.
These two values are concatenated using the + operator and gives Himani
*/

//using regex() function
let city = 'jammu';
const regex = /^./;   // or /j/
let newCity = city.replace(regex, city[0].toUpperCase());    // or (regex, 'J')
console.log(newCity);

//The regex pattern is /^./ matches the first character of a string.