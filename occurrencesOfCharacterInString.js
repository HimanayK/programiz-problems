// using for loop -----------------------------------------------------
function occur(string, letter) {
    let count = 0;
    for (let i=0; i<string.length; i++) {
        if (string.charAt(i) == letter) {
            count++;
        }
    }
    console.log(count);  //3 
}
occur('Himanii', 'i');

/*
In the beginning, the value of the count variable is 0.
The for loop is used to iterate over the strings.
The charAt() method returns a character at a specified index.
During each iteration, if the character at that index matches the required character to match,
 then the count variable is increased by 1.
 */






//Check occurrence of a character using a Regex -------------------------------------------------------------------
function occurrence(string, character) {
    let regularExp = new RegExp(character, 'g');
    let count = string.match(regularExp).length;       // ['i', 'i']   length = 2
    return count;
}
let name = 'Himani';
let character = 'i';
console.log(occurrence(name, character));    //2

//Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern.

/*
In the above example, a regular expression (regex) is used to find the occurrence of a string.

const regularExp = new RegExp(letter, 'g'); creates a regular expression.
The match() method returns an array containing all the matches. Here, str.match(regularExp); gives ["i", "i"].
The length property gives the length of an array element.  which is 2
*/