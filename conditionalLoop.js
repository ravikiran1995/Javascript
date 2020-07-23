// Looping and conditional branching

/*
1.if Statement
2.if...else
3.else...if
4.Ternary ?
5.Nested if
*/

//if statement
// let year = 2020;

// if(year != 2020){
//     console.log('Yes, welcome to pandamic')
// }else{
//     console.log('Nope Sorry!!')
// }

// ternary shortand of if else
// year == 2020 ?console.log('Welcome to pandamic'):console.log("Sorryyy!!!")

let age = 14;

// if (age <= 10) {
//   console.log("Hi Kiddo");
// } else if (age > 10 && age < 15) {
//   console.log("Hello boy");
// } else if (age >= 15 && age <= 25) {
//   console.log("Hi Genetelman");
// } else {
//   console.log("Hello Uncle");
// }

// shoratnd with ternary
// age <= 10
//   ? console.log("Hi Kiddo")
//   : age > 10 && age < 15
//   ? console.log("Hello boy")
//   : age >= 15 && age <= 25
//   ? console.log("Hi Genetelman")
//   : console.log("Hello Uncle");

// Switch statement
// let age = 30;
// write the same if else condition with switch

// Loops
/*
1.for loop
2.while loop
3.do..while loop
*/

// let x = 10;

// for (let i = 0; i <= x; i++) {
//   console.log("init of i-->", i);
//   console.log("init of x-->", x);
// //   decrement the x value by 2
//   x = x - 2;
//   console.log("x--->", x);
// }

// let x = 10;
// let i = 0;
// while (i <= x) {
//   console.log("init of i-->", i);
//   console.log("init of x-->", x);
//   //   decrement the x value by 2
//   x = x - 2;
//   console.log("x--->", x);
//   i++;
// }

// do while
// let x = 10;
// let i = 0;
// do {
//   x = x - 2;
//   console.log("x:", x);
//   console.log("i:", i);
//   i++;
// } while (i == 0);

// prime number
/*
which divided by 1 and itself
*/
//Question: Print primenumber upto 10

/*
for each i in the interaval{
    check if i has divisor from 1 or i
    if yes ->its a prime number
    else -> its not a prime number
}
*/

// let n = 10;

// nextPrime: for (let i = 0; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       continue nextPrime;
//     }
//   }
//   console.log("Prime number is", i);
// }
