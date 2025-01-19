// Object to String Using JSON.stringify()
const person = {
    name: 'Himani',
    city: 'Solna',
    country: 'Sweden'
}
const personString = JSON.stringify(person);
console.log(personString);  //{"name":"Himani","city":"Solna","country":"Sweden"}
console.log(typeof personString);  //string

//JSON.stringify() method is used to convert an object to a string.


//Convert Object to String Using String() -------------------------------------------------------------------------
const person1 = {
    name: 'Jack',
    age: 27
}

const result1 = String(person1);   
const result2 = String(person1['name']); 

console.log(result1);   //[object Object]
console.log(result2);   //Jack

console.log(typeof result1);   //string