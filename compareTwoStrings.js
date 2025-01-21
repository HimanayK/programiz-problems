// string comparison using toUpperCase()
const str1 = 'JavaScript is a fun.';
const str2 = 'javascript is a fun.';

if(str1.toUpperCase() == str2.toUpperCase()) {
    console.log('They are same');
}
else {
    console.log('They are different');
}

// string comparison using Using new RegExp('searchString', 'g/i/gi')
const string1 = 'Hello I am Himani';
const string2 = 'hello i am himani';
const pattern = new RegExp(string1, 'gi');
let compareString2 = pattern.test(string2); // gives true

if (compareString2) {
    console.log('They are same same');
}
else {
    console.log('They are different different');
}

//the RegEx is used with the test() method to perform case insensitive string comparison.
//"g" syntax denotes global and "gi" syntax denotes case insensitive comparisons.

//Using localeCompare() ----------------------------------------------
const strr1 = 'Hello I am Rimani';
const strr2 = 'hello i am rimani';
let compare = strr1.localeCompare(strr2, undefined, {sensitivity: 'base'});
if (compare == 0) {
    console.log('They are same same same');
} 
else {
    console.log('They are different different different');
}


//localeCompare() method is used to perform case insensitive string comparison.
//{ sensitivity: 'base' } treats A and a as the same.