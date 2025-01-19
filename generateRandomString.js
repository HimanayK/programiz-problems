let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomString = '';
for (let i=0; i<5; i++) {
    let randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    randomString += randomCharacter;
    console.log(randomCharacter);
}
console.log(randomString);  //SS9ic

// using in-built method ---------------------------------------------------------------------------------------
let randomString1 = Math.random().toString(36).substring(2,7);
console.log(randomString1);  //ml312

//toString(36) method, 36 represents base 36. The toString(36) represents digits beyond 9 by letters.
//substring(2, 7) method returns five characters.