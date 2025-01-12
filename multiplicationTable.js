function multiplicationTable(number) {

    for (let i = 1; i <= 5; i++) {
         let result = number * i;

         console.log(`${number} * ${i} = ${result}`);
    }
}


multiplicationTable(2);
/*
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
*/