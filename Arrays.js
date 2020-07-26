// Arrays in Javascript

// Arrays are used to store multiple values in a single variable

// 1
// let emptyArray = [];
// let car = ["volvo", "hyundai", "baleno"];
// // 2
// let cars = new Array("Volvo", "i10", "Verna");

// Methods of array
// 1. Push and Pop

// let fruits = [];
// // push operation
// fruits.push("Apple");
// fruits.push("Bannana");
// fruits.push("Orange");
// fruits.push("Kiwi", "Grapes");
// console.log("Fruits", fruits);
// // pop operation
// fruits.pop();

// console.log("Fruits Array:", fruits);

// 2. Shift and Unshift
// let fruits = ["Apples", "Banana"];
// console.log("Original Array", fruits);
// fruits.shift();
// console.log("after shift", fruits);
// fruits.unshift("Kiwi");
// console.log("after unshift", fruits);

// Loops
// let arr = ["Apple", "Bannana", "Kiwi", "Grapes"];

// for (let i = 0; i < arr.length; i++) {
//   console.log("Fruit Name:", arr[i]);
// }

// for (let fruit of arr) {
//   console.log(fruit);
// }

// for (let key in arr) {
//   console.log(key, "->>", arr[key]);
// }

// let userInfo = [
//   {
//     id: 1,
//     name: "Ravi"
//   },
//   {
//     id: 2,
//     name: "Madhushree"
//   },
//   {
//     id: 3,
//     name: "Gayathri"
//   },
//   {
//     id: 4,
//     name: "Ambika"
//   }
// ];

// for (let key in userInfo) {
//   console.log(userInfo[key].name);
// }

// multidimensional array

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ];

// console.log("==>",matrix[1][2]);

// let arr = [1, 2, 3, 4];

// // console.log(arr);
// // console.log(String(arr) === "1,2,3,4");//true
// console.log([] + 1);//[1],1
// console.log([1] + 1);//[1,1],11
// console.log([1, 5] + 1);//[]1,51
