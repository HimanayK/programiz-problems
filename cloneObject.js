//Clone the Object Using Object.assign()
const person = {
    name: 'Himani',
    age: 55,
    class: 'nursery'
}

const clonePerson = Object.assign({}, person);

console.log(person);
console.log(clonePerson)

clonePerson.name = 'Deepak';

console.log(clonePerson.name);   // Deepak
console.log(person.name);        // Himani

/*
Object.assign() method performs deep copy and copies all the properties from one or more objects.
The empty {} as the first argument ensures that you don't change the original object.
Example: without using Object.assign()
const copy = person;
console.log(copy); // {name: "John", age: 21}
const copy = person;
console.log(copy); // {name: "John", age: 21}
copy.name = 'Peter';
console.log(copy.name); // Peter
console.log(person.name); // Peter
Change is seen in both objects because objects are reference types. 
And both copy and person are pointing to the same object.

*/

//Clone the Object Using Spread Syntax -------------------------------------------------------------------------
const person1 = {
    name: 'Himanshu',
    age: 32,
    score: {
       english: 80,
       math: 100
    }
}
const clonePerson1 = {...person1};

clonePerson1.name = 'Bala';     // it reflects only in clonePerson1
clonePerson1.score.math = 130;    // it reflects in both Objects bcoz the deeper objects are referenced

console.log(person1);  //{ name: 'Himanshu', age: 32, score: { english: 80, math: 130 } }
console.log(clonePerson1);  //{ name: 'Bala', age: 32, score: { english: 80, math: 130 } }


//Clone the Object Using JSON.parse() ------------------------------------------------------------------------
const person2 = {
    name: 'Rahul',
    age: 22,
    score: {
       english: 40,
       physics: 200
    }
}

const clonePerson2 = JSON.parse(JSON.stringify(person2));

clonePerson2.name = 'Peter',
console.log(person2);  //{ name: 'Rahul', age: 22, score: { english: 40, physics: 200 } }
console.log(clonePerson2); //{ name: 'Peter', age: 22, score: { english: 40, physics: 200 } }

//JSON.parse() method is used to clone an object.
//JSON.parse() only works with Number and String object literal. 
//It does not work with an object literal with function or symbol properties.