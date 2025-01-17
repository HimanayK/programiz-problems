function check(str) {
    if((str.startsWith('H') || str.startsWith('h')) && (str.endsWith('I') || str.endsWith('i'))) {
        console.log('Yes it starts with H and ends with i');
    } 
    else if(str.startsWith('H') || str.startsWith('h')) {
        console.log('It starts with H only');
    } 
    else if(str.endsWith('i') || str.endsWith('I')) {
        console.log('It ends with i only');
    } 
    else {
        console.log("No, it doesn't start with H and ends with i");
    }

}
check('qimani');



// using regex -----------------------------------------------------------------------
function check1(str) {
    if(/^H/i.test(str) && /I$/i.test(str)) {
        console.log('Yes it starts with H and ends with i');
    } 
    else if(/^H/i.test(str)) {
        console.log('It starts with H only');
    } 
    else if(/I$/i.test(str)) {
        console.log('It ends with i only');
    } 
    else {
        console.log("No, it doesn't start with H and ends with i");
    }

}
check1('Kimani');

/*
The test() method checks for a match in a string. SYNTAX: RegExpObject.test(string);
If it finds a match, it returns true, otherwise it returns false.
The /^H/i pattern checks if the string is H or h.
The /I$/i patterns checks if the string is I or i.
*/