//A regular expression is a sequence of characters that forms a search pattern.
function countVowel(str) {
    let newStr = str.match(/[aeiou]/gi).length;
    console.log(newStr);
}
countVowel('JavaScript Algorithm');


/*
/[aeiou]/gi checks for all the vowels (case-insensitive) in a string. Here,
str.match(/[aeiou]/gi); gives ['a','a','i','A','o','i']
The length property gives the number of vowels present.
*/
//A regular expression is a sequence of characters that forms a search pattern.

//Using for loop --------------------------------------------------------------------
function countVowel1(str) {
    let newStr = str.toLowerCase();   // converted str to lowercase to count uppercase A in the vowel iteration
    let count = 0;
    let vowels = ['a','e','i','o','u'];
    // for loop iterates the string
    for (let i=0; i<newStr.length; i++) {
        // for loop iterates the vowels array
        for (let j=0; j<vowels.length; j++) {
            if(vowels[j] == newStr[i]) {
                count++;
            }
        }
    }
    console.log(count);
}
countVowel1('JavaScript Algorithm');
