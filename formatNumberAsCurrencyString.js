//using new Intl.NumberFormat([locales[, options]]);   ////Intl -> Unicode locale identifier
const value = 34500;
let formatValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(value);
console.log(formatValue);  //$34,500.00



//Simple examples using  new Intl.NumberFormat() / new Intl.NumberFormat([locales[, options]])
let amount = 2000348.986567; 
let newAmount = new Intl.NumberFormat().format(amount);

let newAmount1 = new Intl.NumberFormat('en-US', 
	{ style: 'decimal'}).format(amount); 
	
let newAmount2 = new Intl.NumberFormat('en-US', 
	{ style: 'percent' }).format(amount); 
	
    console.log(newAmount);     //2 000 348,987
console.log(newAmount1);        //2,000,348.987
console.log(newAmount2);        //200,034,899%


//Currency String Using toLocaleString()
const value1 = 3429.9435;
const formatValue1 = value1.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR'
});
console.log(formatValue1);










//formatterObject holds methods that can be used to format numbers,
//locales represents the code for human language that we want to format the number in. And why is this important?