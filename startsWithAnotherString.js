// Using RegEx ------------------regex.test(string)---------------------------------------------
const str = 'Hello World';
let regex = /^he/i;
const checkStartStr = regex.test(str);
console.log(checkStartStr);

if(checkStartStr) {
    console.log(`The string starts with ${str.substring(0,2)}✔️`);
} else {
    console.log(`The string does not starts with ${str.substring(0,2)} ❌`);
}
//true
// /^ indicates the starting of the string.

// Using startsWith() ------------------------------------------------------------------------
const str1 = 'Bye Bye';
let checkStr = str1.startsWith('By');
if(checkStr) {
    console.log(`Yes✔️`);
} else {
    console.log('No❌')
}

// Using lastIndexOf(searchvalue, start) ----------------------------------------------------
const string = 'blue is a blue and blue color.';
const checkString = string.lastIndexOf('blue', 0) === 0;
if(checkString) {
    console.log('Yes Yes ✔️');
} else {
    console.log('No No ❌');  
}
