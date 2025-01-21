//Check Leap Year Using if...else

function check(year) {
    if(((0 == year % 4) && (0 != year % 100)) || (0 == year % 400)) {
        console.log(`${year} is a leap year`);
    }
    else {
        console.log(`${year} is not a leap year❌`)
    }

}
check(2008); //2008 is a leap year
/*A year is a leap year if the following conditions are satisfied:
  The year is a multiple of 400.
  The year is a multiple of 4 and not a multiple of 100. */

  //Check Leap Year Using newDate() ---------------------------------------------
  function check1(year) {
    let leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(`${year} is a leap year`);
    } 
    else {
        console.log(`${year} is not aleap yearyear❌`);
    }
  }
  check1(2000);
  //In the above program, the month of February is checked if it contains 29 days.
  //If a month of February contains 29 days, it will be a leap year
  //getDate() method returns the day of the month
