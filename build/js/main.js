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
console.log(typeof obj);
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
console.log(greetGuitarist(jp));
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
