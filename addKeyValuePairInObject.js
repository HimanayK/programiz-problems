// add key/valuer pair in object'
const person = {
    name: 'Himani',
    age: 100
};
person.gender = 'female';
person['city'] = 'solna';
console.log(person);    //{ name: 'Himani', age: 100, gender: 'female', city: 'solna' }