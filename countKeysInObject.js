// count keys using for ..in loop
const person = {
    name: 'Himani',
    age: 60,
    gender: 'female'
};

let count = 0;
for (let value in person) {
    ++count;
}
console.log(count);  //3
// for..in loop also counts inherited properties

// count keys using Using Object.keys()
const person1 = {
    name: 'Khajuria',
    age: 90,
    gender: 'female',
    city: 'Solna'
};
let count1 = Object.keys(person1).length;
console.log(count1);   //4

//Object.keys() method returns an array of a given object's own enumerable property names i.e. ["name", "age", "hobbies"].
//The length property returns the length of the array.