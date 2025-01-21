//Encode a String to Base64 Using btoa()
// defining the string
const str = "Learning JavaScript"; 

// encoding the string
const result = window.btoa(str);  //btoa() method is used to convert the string to Base64
console.log(result);

// decoding the string
const result1 = window.atob(result);  //atob() method is used to convert the Base64 to a string
console.log(result1);



//Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string
//format by translating it into a radix-64 representation.