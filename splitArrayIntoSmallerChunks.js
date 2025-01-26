////Split Array Using slice(start, end) -> creates new array with portion of existing array or a copy an array 
function arrayChunks(arr, chunk) {
    for (let i = 0; i<arr.length; i += chunk) {
        let chunkArray = arr.slice(i, i + chunk);  //0, 0+2 //2, 2+2 //4, 6, //6, 8
        console.log(chunkArray);  //[ 1, 2 ][ 3, 4 ][ 5, 6 ][ 7, 8 ]
    }
}
arrayChunks([1,2,3,4,5,6,7,8], 2);

////Split Array Using splice(start,del count, add items) -> modify the original array 
function arrayChunks1(arr, chunk) {
    while(arr.length > 0) {
        let chunkArray = arr.splice(0, chunk); //arr -> [11,12,3,10,5,6,17,18] //[3,10,5,6,17,18] //[5,6,17,18] //[17,18]
        console.log(chunkArray);  //[ 11, 12 ] [ 3, 10 ] [ 5, 6 ] [ 17, 18 ]
    }
}
arrayChunks1([11,12,3,10,5,6,17,18], 2);
