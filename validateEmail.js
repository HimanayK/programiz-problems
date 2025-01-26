// program to validate an email address
function validateEmail(email) {
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const checkEmail = pattern.test(email);
    console.log(checkEmail);
}
validateEmail('himanay.k@gmail.com');  //true
validateEmail('himanay.k09@gmail.com');  //true
validateEmail('himanay.k09@com');      //false