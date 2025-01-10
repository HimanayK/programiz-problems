function quadraticEquation(a, b, c) {
    let root1, root2;

  // discriminant
  let discriminant = b * b - 4 * a * c;      //b2 - 4ac

  // condition for real and different roots
  if(discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`The roots of quadratic equation are : ${root1} and ${root2}`);
  }
  // condition for real and equal roots
  else if(discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    console.log(`The roots of quadratic equation are : ${root1} and ${root2}`);

  }
  // if roots are not real
  else {
    realPart = -b / (2 * a).toFixed(2);
    imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(`The roots of quadratic equation are : ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
  }
}

quadraticEquation(1, 6, 5);
quadraticEquation(1, -6, 9);
quadraticEquation(1, -3, 10);
