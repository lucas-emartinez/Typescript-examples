let stringArr = ['one', 'hey', 'Dave'];

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984;
guitars.unshift('Jim')

guitars = stringArr; // No viceversa
mixedData = guitars; // No viceversa

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple

let myTuple: [string, number, boolean] = ['hey', 1, true]

let mixedTuple =  [ 'John', 1, false]

myTuple[1] = 42

// Objects

let obj: object
obj = []

console.log(typeof obj)

obj = bands
obj = {}

const exampleObj = {
    prop1: 'John',
    prop2: true
}

exampleObj.prop1 = 'Dave'
exampleObj.prop2 = false

interface Guitarist {
    name?: string,
    active: boolean, // Optional
    albums: (string | number)[],
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OUB12']
}

let jp: Guitarist = {
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleUpperCase()}!`
    }
    return `Hello!`  
}

console.log(greetGuitarist(jp))

// Enums
// "Unlike most TypeScript features, Enums are not a tyoe-level addition to Javascript but something added to the language and runtime"

enum Grade {
    U = 1, // Esto acomoda los valores de los enums
    D,
    C,
    B,
    A
}

// Type Aliases

type stringOrNum = string | number
type stringOrNuumberArray = (stringOrNum)[]
type UserId = stringOrNum

// Litereal Types
let myName: 'John'

let username: 'John' | 'Jane' | 'Dave'
username = 'Jane'




