let person = {
    name: 'Himani',
    age: 60,
    hobbies: ['reading', 'coding', 'cooking'],
    greet: function() {
        console.log('object is a variable that can store multiple data in key-value pairs😀')
    },
    score: {
        html: 44,
        css: 50
    }
};

delete person.hobbies[0];   // [ <1 empty item>, 'coding', 'cooking' ]
delete person.score.css;   // score: { html: 44 }
console.log(person);



// object is written in a key/value pair. The key/value pair is called a property. 
//You can use the delete operator with . or [ ] to remove the property from an object.
//delete object.property;
//delete object[‘property’];