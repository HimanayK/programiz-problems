//program to replace all instances of a character in a string
const str = 'I am a JavaScript language';
let pattern = /a/g;
let newStr = str.replace(pattern, 'A');

console.log(newStr);  //I Am A JAvAScript lAnguAge


//Replace All Instances Of Character Using Built-in Methods spilt() and join()
const strr = 'Hello world world';
let splitStrr = strr.split('l');
let newStrr = splitStrr.join('L');
console.log(newStrr);   //HeLLo worLd worLd