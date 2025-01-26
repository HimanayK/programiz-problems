// program to check if a variable is undefined or null
function checkVariable(variable) {
    if (variable == null) // or if( typeof variable === 'undefined' || variable === null )
    { 
        console.log(`${variable} is undefined or null`);
    } else {
        console.log(`${variable} is neither undefined nor null`);
    }
}
let myVar;
checkVariable('Hello'); //Hello is neither undefined nor null
checkVariable(19);      //19 is neither undefined nor null
checkVariable(null);    //null is undefined or null
checkVariable(myVar);   //undefined is undefined or null

//We cannot use the typeof operator for null as it returns object.
