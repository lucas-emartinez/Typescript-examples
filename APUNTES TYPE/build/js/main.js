"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr; // No viceversa
mixedData = guitars; // No viceversa
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['hey', 1, true];
let mixedTuple = ['John', 1, false];
myTuple[1] = 42;
// Objects
let obj;
obj = [];
//console.log(typeof obj)
obj = bands;
obj = {};
const exampleObj = {
    prop1: 'John',
    prop2: true
};
exampleObj.prop1 = 'Dave';
exampleObj.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OUB12']
};
let jp = {
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleUpperCase()}!`;
    }
    return `Hello!`;
};
//console.log(greetGuitarist(jp))
// Enums
// "Unlike most TypeScript features, Enums are not a tyoe-level addition to Javascript but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
// Litereal Types
let myName;
let username;
username = 'Jane';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
//logMsg('Hello')
//logMsg(add(2,3))
//logMsg(true)
let subtract = function (c, d) {
    return c - d;
};
//interface mathFunction { 
//   (a: number, b: number): number
//} // lo mismo que arriba
let multiply = function (c, d) {
    return c * d;
};
// logMsg(multiply(23,3))
// Optional parameters
const addAll = (a, b, c) => {
    // Type Guard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c; // No Typeguard needed
};
// logMsg(addAll(1,2,3))
// logMsg(addAll(1,2))
// logMsg(sumAll(2,3))
// logMsg(sumAll(undefined, 3))
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
//logMsg(total(10, 2, 3))
// Never
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
// Convert to more or less specefic type
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific type
let d = 'world'; // less specific type
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return `${a}${b}`;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat' /* esto esta mal */);
//10 as string // error, debemos usar unknown
10; // ok - SE LLAMA FORECASTING O DOUBLE ASSERTION - DOUBLE CASTING
///////////////////////// THE DOM ////////////////////////////////
const img = document.querySelector('img'); // NON NULL ASSERTION More specific type
const myImg = document.getElementById('#img'); // Less specific type
const nextImage = document.getElementById('#img'); // do not work for tsx in react
// If i do not assert the HTMLImageElement type, i cannot access the src property
// IF I assert the type, i can access the src property
img.src;
myImg.src; // error, SE PUEDE USAR UNA NOT NULL ASSERTION
//////////////////////////// CLASSES ///////////////////////////////////
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
