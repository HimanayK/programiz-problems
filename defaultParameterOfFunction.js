// program to set default parameter value for a function
let calculateSum = (a = 10, b = 20) => {
    console.log(a + b);
}
calculateSum(5,5); //10
calculateSum();    //39
calculateSum(1);   //21