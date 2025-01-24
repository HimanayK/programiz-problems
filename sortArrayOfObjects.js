//Sort Array by Property Name
function sortArray(arr) {
    arr.sort((a, b) => {
        let name1 = a.name.toUpperCase();
        let name2 = b.name.toUpperCase();
        let comparison = 0;
        if(name1 > name2) {
            comparison = 1;   //If comparing two names results in 1, then their order is changed.
        } else {
            comparison = -1;   //If comparing two names results in -1 or 0, then their order is left as is.
        }
        return comparison;   // Amul, Deepak, Himani, Kamal
     });
     console.log(arr);   //[{ name: 'Amul', age: 100 },{ name: 'Deepak', age: 70 },{ name: 'Himani', age: 50 },{ name: 'Kamal', age: 30 }]
}
sortArray([{name: 'Himani', age: 50}, {name: 'Deepak', age: 70}, {name: 'Kamal', age: 30}, {name: 'Amul', age: 100}]);


// Sort array by Property age --------------------------------------------------
function sortArray1(arr) {
    arr.sort((a, b) => {
        return a.age - b.age;     //If their difference is a negative value, their order is changed // 30, 50, 70, 100
     });
     console.log(arr); //[{ name: 'Kamal', age: 30 },{ name: 'Himani', age: 50 },{ name: 'Deepak', age: 70 },{ name: 'Amul', age: 100 }]
}
sortArray1([{name: 'Himani', age: 50}, {name: 'Deepak', age: 70}, {name: 'Kamal', age: 30}, {name: 'Amul', age: 100}]);