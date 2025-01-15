//A string is a palindrome if it is read the same from forward or backward. 
// For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    while (str[i] !== str[str.length - 1 - i]) {
        return 'It is not a palindrome ☹️';
    }
  }
  return 'It is a palindrome 🥳🥳';
}

console.log(palindrome('madam'));




// using in-built methods

function checkPalindrome(str) {
  let string = str.split('');    //converted into array    [ 'm', 'a', 'd', 'a', 'm' ]
  let reverseStr = string.reverse();  // revers the array values  [ 'm', 'a', 'd', 'a', 'm' ]
  let newStr = reverseStr.join('');   // madam
  if (str == newStr) {
    console.log('It is a palindrome 🥳🥳 🥳🥳');
  } else {
    console.log('It is not a palindrome ☹️ ☹️');
  }
}
checkPalindrome('madam');