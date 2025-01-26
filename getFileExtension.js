//get the file extension using split() and pop()
function fileExtension(file) {
    const extension = file.split('.').pop();
    console.log(extension); 
}
fileExtension('module.txt');
fileExtension('module.js');
/*
txt
js  */

////get the file extension using substring(start, end) and lastIndexOf() ------------------------------------------
function fileExtension1(file) {
    const extension = file.substring(file.lastIndexOf('.') + 1, file.length); 
    console.log(extension); 
}
fileExtension1('module.html');
fileExtension1('module.css');
/*
html
css  */

//substring(start-inclusive, end-exclusive) and index less than 0 is treated as 0