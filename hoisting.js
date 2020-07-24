// hoisting

/*
1.declaration
2.initialization / assign value
3.use it
*/

// a = 100;
// console.log(a);
// let a;//let and const will not be hoisted only  var will be hoisted

// hoist();// function is hoisted before its defination
// function hoist() {
//   console.log("hey you, You are Hoisted to top!!!!");
// }

// function hoist() {
//   a = 200;
//   var b = 100;
// }
// hoist();
// console.log(a);//200
// console.log(b);//100

// console.log(hoist);
// var hoist = "the variable has been hoisted";// only the declaraitons will be hoisted

// var a; //declaration
// console.log(a); //undefined //using 'a' before its init
// a = "Hey bro, you are hoisted"; //this is just assignment/init

// hoist1();// only functionis hoisted not its variable or anything
// function hoist1() {
//   var message;
//   console.log(message);//undefined
//   message = "Hoisting is all about";
// }

// let hoist;
// console.log(hoist);//undefined
// hoist = "now let as hoisted";

// const PI = {
//   value: 3.142
// };
// PI.value = 22 / 7;
// console.log(PI);

// function getCircumference(radius) {
//   console.log(circumference);
//   circumference = PI * radius * 2;
//   const PI = 3.142;
// }
// getCircumference(5);
