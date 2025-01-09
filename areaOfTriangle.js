//If you know the base and height of a triangle
const baseValue = 5;
const heightValue = 10;

const area = baseValue * heightValue / 2;
console.log(`Area of triange is : ${area}`);




//If you know all the sides of a triangle
const side1 = 4;
const side2 = 5;
const side3 = 6;

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(
  `The area of the triangle is ${areaValue}`
);



