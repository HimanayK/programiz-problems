// generator function -------------------------------------------------------
function* generatorFun() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFun(); //generator object
for (let value of generator) {
    console.log(value);  //1 2 3
}

//Working of multiple yield Statements --------------------------------------------------------------------------------------
function* generate() {
    console.log('before yield1');
    let x = yield 100;
    console.log(x);      //When generator.next(3) is encountered, the code again starts at let x = yield 100; and the argument 3 is assigned to x. Also, remaining code is executed up to the second yield
    console.log('before yield 2');
    yield 200;
    console.log('No yield anymore');
}
const generator1 = generate();
console.log(generator1.next());  //execute until first yield
console.log(generator1.next(3));  //continue execution from the last yielded position
console.log(generator1.next());  //no more yield and executed last console line
/*
before yield1
{ value: 100, done: false }
 3
before yield 2
{ value: 200, done: false }
No yield anymore
{ value: undefined, done: true }   */


// program to generate range of numbers and characters -----------------------------------------------------
//iterate generator function is used here to iterate through lower and upper bounds.
function* iterate(a, b) {
for (let i =a; i<=b; i++) {
      yield i;
}
}

function range(a, b) {
    if(typeof a === 'string') {
        let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map((n) => String.fromCharCode(n));
        console.log(result);
    } else {
        result = [...iterate(a, b)];
        console.log(result);
    }
}
range(1, 5);
range('A', 'G');
//spread syntax ... is then used to include all the elements returned by the iterate function.
//charCodeAt() method takes in an index value and returns an integer representing its UTF-16 (16-bit Unicode Transformation Format) code.
//The map() method iterates through all the array elements.
// fromCharCode() method converts Unicode values into characters.
/*
[ 1, 2, 3, 4, 5 ]
[  'A', 'B', 'C', 'D', 'E', 'F', 'G']
  */


