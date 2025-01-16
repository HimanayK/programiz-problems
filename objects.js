// using object literal ---------------------------------------------------------------------------------------------------
const person = {
  name: "Himani",
  degree: "MBA",
  hobbies: ["coding", "reading", "games"],
  greet: function () {
    console.log("Hello everyone!");
  },
  score: {
    html: 25,
    css: 20,
  },
};
console.log(typeof person); //object

//accessing the object values
console.log(person.name); // Himani
console.log(person.hobbies[1]); // reading
person.greet(); // Hello everyone!
console.log(person.score.css); // 20



// using using instance of an object ------------------------------------------------------------------------------------
//new keyword is used with the Object() instance to create an object.
const person1 = new Object({
  name: "Himani Khajuria",
  degree: "MBA",
  hobbies: ["coding", "reading", "games"],
  greet: function () {
    console.log("Hello World!!!!");
  },
  score: {
    html: 35,
    css: 40,
  },
});
console.log(typeof person1); //object
//accessing the object values
console.log(person1.name); // Himani Khajuria
console.log(person1.hobbies[1]); // reading
person1.greet(); // Hello World!!!!!
console.log(person1.score.css); // 40



//Create an object using Constructor Function ---------------------------------------------------------------------------
//Person() is an object constructor function. And, we use the new keyword to create an object from a constructor function.
function Person() {
    this.name = "Himani Sharma",
    this.degree = "MCA",
    this.hobbies = ["coding", "JavaScript", "games"],
    this.greet = function () {
      console.log("Hello Constructor!!!!");
    },
    this.score = {
      html: 35,
      css: 50,
    }
}
const person2 = new Person();
  console.log(typeof person2); //object
  //accessing the object values
  console.log(person2.name); // Himani Khajuria
  console.log(person2.hobbies[1]); // reading
  person2.greet(); // Hello World!!!!!
  console.log(person2.score.css); // 40