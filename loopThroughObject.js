// program to loop through an object using for...in loop -------------------------------------------------------
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

for (let key in student) {
    let value = student[key];
    console.log(`${key} -> ${value}`);
}
/*
name -> John
age -> 20
hobbies -> reading,games,coding
*/

//Loop Through Object Using Object.entries(ObjectName) and for...of  ------------------------------
const student1 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

for (let [key, value] of Object.entries(student1)) {
    console.log(`${key} ---> ${value}`)
}
/*
Object.entries() method returns an array of a given object's key/value pairs. 
The for...of loop is used to loop through an array.
OUTPUT:
name ---> John
age ---> 20
hobbies ---> reading,games,coding
*/


// The for...in loop will also count inherited properties.
const student2 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};
const person = {
    gender: 'male'
};
student2.__proto__ = person;    // student2 inheriting property of person

for (let key in student2) {
    let value = student2[key];
    console.log(`${key} -> ${value}`);
}
/*
name -> John
age -> 20
hobbies -> reading,games,coding
gender -> male
*/