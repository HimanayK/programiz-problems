//Remove all white spaces from text ---------------------------------------------
const name = '     Hello World!  ! !'
const newStr = name.split(' ').join('');
console.log(newStr);  //HelloWorld!!!


// using regex ----------------------------------------------
const name1 = '     Helloooo World!  ! !'
const newStr1 = name1.replace(/\s/g, '')
console.log(newStr1);  //HellooooWorld!!!
