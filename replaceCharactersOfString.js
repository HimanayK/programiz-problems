function replaceCharacters(sentence) {
  const newSentence = sentence.replace('pink', 'orange');
  console.log(newSentence);     //I am Pink with orange pink colors
}

replaceCharacters('I am Pink with pink pink colors!');




//using regualar expression regex global  - /regex/g   --------------------------------------------------------
function replaceCharacters1(sentence) {
    const regex = /pink/g;
    const newSentence1 = sentence.replace(regex, 'orange');
    console.log(newSentence1);     //I am Pink with orange orange colors
  }
  
  replaceCharacters1('I am Pink with pink pink colors!');



  //using regualar expression regex insensitive  - /regex/i --------------------------------------------------------------
function replaceCharacters2(sentence) {
    const regex = /pink/i;
    const newSentence2 = sentence.replace(regex, 'orange');
    console.log(newSentence2);     //I am orange with pink pink colors!
  }
  replaceCharacters2('I am Pink with pink pink colors!');



  //using regualar expression regex global insensitive  - /regex/gi --------------------------------------------------------------
function replaceCharacters3(sentence) {
    const regex = /pink/gi;
    const newSentence3 = sentence.replace(regex, 'orange');
    console.log(newSentence3);     //I am orange with orange orange colors!
  }
  replaceCharacters3('I am Pink with pink pink colors!');