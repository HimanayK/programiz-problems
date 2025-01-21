//Check String with includes()

function check(subStr) {
    let str = 'javaScript is a fun!!!'
    let checkSubString = str.includes(subStr);

    if(checkSubString) {
        console.log(`Yes, it contains ${subStr}`);
    }
    else {
        console.log(`No.............................`);
    }
}
check('fun');

//Check String with indexOf()
function check1(subStr) {
    let str = 'HTML and CSS are responsive web design.';
    let checkSubString = str.indexOf(subStr);
    if(checkSubString !== -1) {
        console.log(`Yessss, it contains ${subStr}`);
    }
    else {
        console.log(`Nopssss.............................`);
    }
}
check1('are');
//indexOf() method searches a string and returns the position of the first occurrence.
// When a substring cannot be found, it returns -1.