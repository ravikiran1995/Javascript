// Strings

let single = "Single";
let double = 'it"s a new line';
let backTicks = `BackTicks`;

// Special Charaters
/*
1. /n ==> new line
2. /r =>
3./' /" => to print quotes
4.\t =>tab space
*/

// String methods
// let myString = "Welcome to javascript";
// console.log("String length", myString.length);
// console.log("==>", myString[11]);
// console.log("Lowercase", myString.toLowerCase());
// console.log("toUpperCase", myString.toUpperCase());
// console.log(myString[0].toLowerCase());//only w will be in lower case

//Searching Substring in a string

// let stringData= "One of the new way of learning";

// let stringData = "Widget id is always zero";
// console.log(stringData.indexOf('id',2));

let stringHere = "as sly as a fox, as strong as an oxx";
// let findString = "as";
// let pos = -1;

// while ((pos = stringHere.indexOf(findString, pos + 1)) != -1) {
//   console.log(pos);
// }
// console.log(stringHere.lastIndexOf("as",10));
// console.log(stringHere.includes("as"));
// let name = "Ankitha";
// // console.log(name.startsWith("Adi"));
// console.log(name.endsWith('adi'));

// how to get substring
/*
1.substring
2.slice
3.substr
*/

// let str = "Stringify";

// console.log("substring", str.substring(2)); //String
// console.log('substr',str.substr(2,2));//Stri
// console.log('slice',str.slice(0,6));//Stringi
// console.log('slice',str.slice(2,-2))//ri
/*
substr(start,length):from the start get length of characters||it allows negative for start
slice(start,end):from the start to the end [end is not included] || allows negative
substring:between the start and end || negative value means 0
*/

// string trim

// let orgString = "  string asd  ";
// console.log(orgString);
// console.log(orgString.length);

// let trimedString = orgString.trim();
// console.log(trimedString);
// console.log(trimedString.length);
