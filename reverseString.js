// Reverse string using for loop
function reverseString(str) {
    let newStr = '';
  
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    console.log(newStr);
}
reverseString('Hi Himani');   //inamiH iH


// Using in built method

function reverseString1(str) {
    let strArray = str.split('');
    let reverseArray = strArray.reverse();
    let newStr = reverseArray.join('');
    console.log(newStr);
}
reverseString1('Hello World');  //dlroW olleH