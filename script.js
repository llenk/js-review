//Assignments
//we can tell that because they have an assignment operator

let x = 1; //number data type
let y = '1.1'; //string data type
//let z = hello; //undefined

//under the hood, there's all numbers, no ints and floats
//javascript is loosely typed

//those variable names are terrible. don't describe what variable is/does

let firstName = 'Ellen'; //camelCase is ideal
let numberOfPets = 2; //I have two pets now I guess

//Expressions

let number = 3;
//all three of the below do the same thing
//number = number + 1; 
//number += 1;
//number++;

//this adds twelve, to get 15
number += 12;
//this concats the 1 at the end
//number += y;

//these two methods do the same thing
number += parseFloat(y);
console.log(Number(y));

//when it console.logs blue (in Chrome) it's a number
console.log(number);

//Conditionals
//evaluate to 'truthy'

if (true) { //boolean word 'true' is true
    console.log('the condition was true'); //actually when it's 'truthy'
}
if (2 == '2') {
    console.log('2 == \'2\''); //two equal signs makes type coersion happen
}
if (2 === '2') {
    console.log('2 === \'2\''); //three equal signs doesn't do type coersion
    //therefore this is false
    //this code doesn't fun
}

//Stuff with Types
if (number) { //this evaluates lol
    console.log('eyyyy'); //yolo
}
if (0) { //this doesn't go
    console.log('nayyyy');
}
if (-1) { //this goes
    console.log('ayyyy'); //true
}
if (firstName) {
    console.log('#yolo'); //true
}
if ('') {
    console.log('#nolo'); //false
}
if (!'') {
    console.log('not empty string??'); //true
}
if ({}) {
    console.log('empty Object is true'); //true
}
if ([]) {
    console.log('empty array'); //true
}
if (undefined) {
    console.log('undefined'); //false
}
if (null) {
    console.log('null'); //false
}
if (typeof 7 == 'number') {
    console.log('typeof7'); //true
}
if (typeof NaN == 'number') {
    console.log('NaN has data type number wuuuut');
    //so it's kinda because if you did Number('adsjfl') the thing you would return
    //is a number because um.
    //sure.
}

//Conditionals Again
if (7>8) {
    console.log('no');
}
if ('7' > 8) {
    //type coersion
}
if ('hello' > 8) {
    //type coersion but this is still false
    //the opposite ('hello'<8) is also false
}
// 8 < 8 is false
// 8 >= 8 is true
// 8 != 8 is false
// 8 != 9 is true
//that was all pretty obvious
// 8 !== '8' is true because no type coersion with three 'symbols'
// 8 != '8' is false because there's type coersion

//Loops

//while
/*
while (true) {
    console.log('infinite loop');
}
*/
let loopContinuer = true;
while (loopContinuer) {
    console.log('not an infinite loop');
    loopContinuer = false;
}

let loopCounter = 0;
while (loopCounter < 5) {
    loopCounter++;
    console.log('I am a loop that ends'); 
    //chrome puts a number 5 next to this instead of the same line 5 times
}
for (let i=0; i<5; i++) {
    console.log('I am a loop that ends');
    //chrome puts this on a separate line bc it's running from a new line
}
for (let i=0; i<5; i+=2) {
    console.log('asf');
}
for (let i=0; i<5; i+=2.5) {
    console.log('i is:', i);
    //just does when i is 0 and 2.5
}

const hats = ['cowboy hat', 'stocking cap', 'top hat', 'baseball cap', 'beanie', 'bowler hat'];
//i don't have any comments here
for (let i=0; i<hats.length; i++) {
    console.log('a ' + hats[i] + ' is a type of hat');
}
for (let i of hats) { //this one has i being an element of hats
    console.log('a ' + i + ' is a type of hat');
}
for (i in hats) { //this one has i being a number (INteger)
    console.log('a ' + hats[i] + ' is a type of hat');
}
for (let i=1; i<hats.length; i++) { //skip first one
    console.log('a ' + hats[i] + ' is a type of hat');
}
for (let i=1; i<hats.length; i+=2) { //do every other one
    console.log('a ' + hats[i] + ' is a type of hat');
}

//Functions

//function declaration
//this kind of function is HOISTED which means that when JS goes through it the first time 
//this function is checked out and then the code is run the second time so no matter where you write 
//it (top or bottom) it'll work
function doubleIt(n) {
    return 2*n;
} 

const doubledNumber = doubleIt(4);
console.log(doubledNumber);

//function expression
//this kind HAS TO be called after being expressed bc if it was a let it could be changed 
//so it has to be placed right. Not hoisted. You'll get an uncaught reference error if you mess it up
const tripleIt = function(numberToTriple) {
    return numberToTriple*3;
}

console.log(tripleIt(7));
console.log(tripleIt(60));

//Built-In Functions
console.log(Number('8')); //number data type
console.log(String(8)); //string data type
let eight = 8;
console.log(eight.toString()); //string data type
console.log(eight); //number data type

let numberArray = [1,4,7,4,3,5,3];

console.log(numberArray.pop()); //returns the thing it popped off
numberArray.shift();
console.log(numberArray.unshift(0)); //adds to front, returns the length

//stuff can alter and return whatever it wants #yolo

//this is a method, which we can tell bc it's got the dot
//there's a difference between function and methods
numberArray.push(42);

console.log(numberArray);

