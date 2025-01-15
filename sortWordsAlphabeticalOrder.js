function sortWords(sentence) {
    let words = sentence.split(' ');    // [ 'I', 'am', 'learning', 'JavaScript' ]
    let sorted = words.sort();         // [ 'I', 'am', 'learning', 'JavaScript' ]
    let sortedSentence = sorted.join(' ');     // I JavaScript am learning
    console.log(sortedSentence);

}
sortWords('I am learning JavaScript');


function sortWords1(sentence) {
    let wordsArray = sentence.split(' ');    // [ 'I', 'am', 'learning', 'JavaScript' ]
    wordsArray.sort();         // [ 'I', 'am', 'learning', 'JavaScript' ]
    
    for (const element of wordsArray) {
        console.log(element);
    }

}
sortWords1('I am learning JavaScript');
/*
I
JavaScript
am
learning
*/




//The sort() method sorts the strings in alphabetical and ascending order.
// Why I and JavaScript are printed before am? This is because I and J of JavaScript are in uppercase. And, when we use the sort() method,
//  uppercase letters are placed before lowercase.