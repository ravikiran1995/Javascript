// type Conversions

// string conversion
// let value = true;
// console.log(typeof value);// object {}
// // convert boolean to string
// value = String(value);
// console.log(typeof value);//string "null"

// numeric Conversion
// let str = "345678";
// console.log(typeof str);//string
// str = Number(str);//converting string to number type
// console.log(typeof str);// number

// let a = "20";
// let b = "50";

// function div(x,y){
//     console.log(typeof x);//string
//     console.log(typeof y);//string
//     let result = x - y;
//     console.log(typeof result);// number {except + operator all the string will be implicitly converted to number}
// }
// div(a,b);
// let a = undefined;
// a = Number(a);
// console.log(typeof a);//number
// console.log(a)

// boolean conversion

// let hello = "Some message";
// hello = Boolean(hello);//converted to boolean
// console.log(typeof hello);// boolean
// hello = "";//assigned an empty string
// hello = Boolean(hello);//converting string to boolean
// console.log(typeof hello);// string
// console.log(hello);
// let hello = {};
// console.log(typeof hello)//object
// hello = Boolean(hello)//converting object to boolean
// console.log(hello)//false