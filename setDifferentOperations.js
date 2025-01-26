//Set Union Operation -> combines elements of both sets into one
function union(setA, setB) {
    let unionSet = new Set(setA);
    for (let value of setB) {
        unionSet.add(value);
    }
    console.log(unionSet);    //Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 10, 12 }
}
const setA = new Set([1,2,3,4,5,6,7,8]);
const setB = new Set([2,4,6,8,10,12]);
union(setA, setB);

////Set Intersection Operation -> represents elements that are present in both setA and setB ---------------------------------
function intersection(setA, setB) {
    let intersectionSet = new Set();
    for (let value of setB) {
        if(setA.has(value)) {
            intersectionSet.add(value);
        }
    }
    console.log(intersectionSet);    //Set(4) { 2, 4, 6, 8 }
}
const setA1 = new Set([1,2,3,4,5,6,7,8]);
const setB1 = new Set([2,4,6,8,10,12]);
intersection(setA1, setB1);


////Set Difference Operation -> represents elements that are present in one set and not in another set.-------------------
function difference(setA, setB) {
    let differenceSet = new Set(setA);
    for (let value of setB) {
            differenceSet.delete(value);
    }
    console.log(differenceSet);    //Set(4) { 1, 3, 5, 7 }
}
const setA2 = new Set([1,2,3,4,5,6,7,8]);
const setB2 = new Set([2,4,6,8,10,12]);
difference(setA2, setB2);

//Set Subset Operation -> returns true if all the elements of setB are in setA -------------------------------------
function subSet(setA, setB) {
    for (let value of setB) {
            if(setA.has(value)) {
                return 'setB is a subset of setA';
            } else {
                return 'setB is not a subset of setA';
            }
    }
}
const setA3 = new Set([1,2,3,4,5,6,7,8]);
const setB3 = new Set([2,4,6,8]);
console.log(subSet(setA3, setB3)); //setB is a subset of setA