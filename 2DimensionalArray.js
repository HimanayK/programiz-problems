//// program to create a two dimensional array
let arr = [];
//// creating two dimensional array
for (let i = 0; i<2; i++) {
    for (let j = 0; j<3; j++) {
        arr[i] = [];     //1st j iteration [][][] 2nd j iteration [][][]
    }
}
console.log(arr);  //[ [], [] ]

 // inserting elements to array
    for (let i = 0; i<2; i++) {
        for (let j=0; j<3; j++) {
            arr[i][j] = j;     //first j iteration 0 1 2  2nd j iteration  0 1 2 
        }
    }

console.log(arr);   //[ [ 0, 1, 2 ], [ 0, 1, 2 ] ]