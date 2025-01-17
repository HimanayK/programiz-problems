// using in operator
const person = {
    name: 'Himani',
    class: '12th',
    city: 'Stockholm',
    greet: function() {
       console.log('Hello world');
    },
    score: {
        html: 4,
        css: 10
    }
};

const haskey = 'score' in person;
if(haskey) {
    console.log('The key exists');
}
else {
    console.log("The key doesn't exist");
}



// using objectName.hasOwnProperty('key') method
const person1 = {
name: 'Himani',
class: '12th',
city: 'Stockholm',
greet: function() {
   console.log('Hello world');
},
score: {
    html: 4,
    css: 10
}
};

const haskey1 = person1.hasOwnProperty('greet');
if(haskey1) {
console.log('The key exists');
}
else {
console.log("The key doesn't exist");
}






/*
 in operator is used to check if a key exists in an object. 
 The in operator returns true if the specified key is in the object, otherwise it returns false.

hasOwnProperty() method is used to check if a key exists in an object. 
The hasOwnProperty() method returns true if the specified key is in the object, otherwise it returns false.
*/