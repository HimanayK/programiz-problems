// program to extract value as an array from an array of objects using map()

let arr = [
    {a: 1, b: 2},
    {a: 2, b: 3},
    {a: 4, b: 6},
    {a: 10, b: 2},
]


propertyArray = arr.map(item => {
    return item.a;
});

//---------------------------or -------------------------------------------------------------------------------------

console.log(propertyArray);
function extractPropertyValues(arr) {
    let propertyValues = arr.map((item) => {
        return item.a;    // 10 30 50
    });
    console.log(propertyValues);
}
extractPropertyValues([{a: 10, b: 20}, {a: 30, b: 40}, {a: 50, b: 60}]);

/*
in map() --> item 1 {a: 10, b: 20}, item.a is 10
item 2 {a: 30, b: 40},   item.a is 30
item 3 {a: 50, b: 60}]); item.a is 50
*/