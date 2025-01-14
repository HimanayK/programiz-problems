
function guess(number) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (number == randomNumber) {
        console.log(`You guessed the right number 🥳🥳`);
    } 
    else {
        console.log(`The guess is wrong`);
    }

}

guess(6)

