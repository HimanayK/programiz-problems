// Prime number from 1 to 15
for (let i = 1; i <= 15; i++) {
    let flag = false;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                flag = true;
                break;
            }
        }

    if (i == 1) {
            console.log("1 is neither prime nor composite");
        }
     else if (flag == false) {
        console.log(`${i} is a prime number ✔️`);
    }
    else {
        console.log(`${i} is not a prime number ❌`);
    }
}

/*
1 is neither prime nor composite
2 is a prime number ✔️
3 is a prime number ✔️
4 is not a prime number ❌
5 is a prime number ✔️
6 is not a prime number ❌
7 is a prime number ✔️
8 is not a prime number ❌
9 is not a prime number ❌
10 is not a prime number ❌
11 is a prime number ✔️
12 is not a prime number ❌
13 is a prime number ✔️
14 is not a prime number ❌
15 is not a prime number ❌
*/