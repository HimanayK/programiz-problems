// program to create a countdown timer

//let countDownTime = new Date().getTime() + 24 * 60 * 60 * 1000;   //time to countdown from (in milliseconds)
 let countDownTime = new Date("23 Jan 2025 5:15:30 PM").getTime();

// countdown timer
let timer = setInterval(() => {
    let now = new Date().getTime();  // get today's date and time in milliseconds
    let timeLeft = (countDownTime - now) / 1000;  //converted into milliseconds

    let days = Math.floor(timeLeft / 3600 / 24);      // 3600 means 60mins * 60seconds
    let hours = Math.floor(timeLeft / 3600) % 24;    //modulo 24hrs will give hours
    let minutes = Math.floor(timeLeft / 60) % 60;    // modulo 60mins will give minutes
    let seconds = Math.floor(timeLeft % 60);         // modulo 60secs will give seconds
    
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

 // clearing countdown when complete
if (timeLeft < 0) {
    clearInterval(timer);
    console.log('CountDown Finished');
}
}, 2000);



/*
1day = 24hrs
1hr = 60 mins
60mins = 3600 seconds  bcoz (1min = 60 seconds)
1sec = 1000 miliseconds

1d 3h 16m 35s
1d 3h 16m 33s
1d 3h 16m 31s
1d 3h 16m 29s
*/

