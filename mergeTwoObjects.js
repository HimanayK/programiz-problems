// merge two objects using Object.assign()
const person = {
    name: 'Himani',
    age: 28
};
const student = {
    gender: 'male',
    age: 22
};
const newPerson = Object.assign(person, student);
console.log(newPerson); //{ name: 'Himani', age: 22, gender: 'male' }  second object overwrites first object's age value 



// merge two objects using ... spread operator 
const person1 = {
    name: 'Himani',
    age: 28
};
const student1 = {
    gender: 'male',
    age: 29
};
const newPerson1 = {...person1, ...student1};
console.log(newPerson1);   //{ name: 'Himani', age: 29, gender: 'male' }