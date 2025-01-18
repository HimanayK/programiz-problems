// replace string occurence using RegEx
const str = 'I have blue hair with blue car and blue house';
const regex = /blue/gi;
let newStr = str.replace(regex, 'pink');
console.log(newStr);  //I have pink hair with pink car and pink house

// using split and join()
const str1 = 'I have blue hair with blue car and blue house';
let newStr1 = str1.split('blue').join('GREEN');
console.log(newStr1);  //I have GREEN hair with GREEN car and GREEN house


