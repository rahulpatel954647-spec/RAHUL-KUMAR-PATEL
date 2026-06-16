//Arithmetic operators
let a = 10;
let b = 20;

console.log("Addition" , a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Assignment Operators
a += 10;
console.log(a);

//Comparison Operators
let c = 5;
let d = '5';

console.log(c==d);  //true
console.log(c===d);     //false 

console.log(a > b);
console.log(a < b);
console.log(a >= b);

console.log(c != d); 

//Logical Operators

let age = 20;

console.log(age > 5 && age >30);
console.log(age > 5 || age > 30);

//Increment or decrement
a ++;
console.log(a);

a --;
console.log(a);

//Ternary operator
console.log(age > 18 ? 'eligible to vote' : 'not eligible');
