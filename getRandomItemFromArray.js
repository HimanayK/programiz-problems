//Get Random Item From an Array
function randomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomArrayItem = arr[randomIndex];
    console.log(randomArrayItem);
}
randomItem([1, 'Hello', 'Bye', 2]);