//Replace All Line Breaks Using Built-in Methods - split() and join()
const str = `Hi! everyone.
I'm Himani Khajuria.
I'm from India.`;

let newStr = str.split('\n').join('<br>');
console.log(newStr);  //Hi! everyone.<br>I'm Himani Khajuria.<br>I'm from India.



//Replace All Line Breaks Using RegEx --------------------------------------------------------------------
const strr = `Hi! everybody.
I'm Himani Sharma.
I'm from Sweden.`;

let newStrr = strr.replace(/(\r\n|\r|\n)/g, '<br>');
console.log(newStrr);   //Hi! everybody.<br>I'm Himani Sharma.<br>I'm from Sweden.

//special control character (\r) with the ASCII code 13, often used to represent the end of a line in text files created on 
//older operating systems (e.g., Windows uses \r\n for line breaks)
// \r metacharacter matches carriage return characters.
