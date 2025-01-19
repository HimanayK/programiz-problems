//Trim a String
const str = '           Hello World                   ';
const trimStr = str.trim();
console.log(trimStr);
//trim() method removes white space from both sides of the string.



//Trim a String Using RegEx
const str1 = '           Hello Worlddd                  ';
const trimStr1 = str1.replace(/^\s+|\s+$/g, '');
console.log(trimStr1);

// /^\s+|\s+$/g checks for whitespace at the beginning and end of the string
// +  matches one or more occurrences 