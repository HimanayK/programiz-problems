// ASCII - American Standard Code for Information Interchange.
//ASCII is a numeric value that is given to different characters and symbols for computers to store and manipulate.
// For example, the ASCII value of the letter 'A' is 65.
//charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//The codePointAt() method returns an integer that denotes the Unicode point value of a character in the string.

function codeOfChar(str) {
    console.log(`UTF-16 code value of a at index 1 : ${str.charCodeAt(1)}`);
    console.log(`Unicode point value of a at index 1 : ${str.codePointAt(1)}`);

}

codeOfChar('Happy Birthday');

/*
UTF-16 code value of a at index 1 : 97
Unicode point value of a at index 1 : 97
*/