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

//console.log(typeof obj)

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

//console.log(greetGuitarist(jp))

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

type Guitarist_type = {
    name: string,
    active: boolean, 
    albums: stringOrNuumberArray,
}

// Litereal Types
let myName: 'John'

let username: 'John' | 'Jane' | 'Dave'
username = 'Jane'

// functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

//logMsg('Hello')
//logMsg(add(2,3))
//logMsg(true)

let subtract = function (c: number, d: number):
number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
//interface mathFunction { 
 //   (a: number, b: number): number
//} // lo mismo que arriba

let multiply: mathFunction = function (c, d) {
    return c * d
}

// logMsg(multiply(23,3))


// Optional parameters

const addAll = (a: number, b: number, c?: number):
number => {
    // Type Guard
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

const sumAll = (a: number = 10, b: number, c: number = 2):
number => {
    return a + b + c // No Typeguard needed
}

// logMsg(addAll(1,2,3))
// logMsg(addAll(1,2))
// logMsg(sumAll(2,3))
// logMsg(sumAll(undefined, 3))


// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

//logMsg(total(10, 2, 3))


// Never

const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

const infinite = (): void => {
    let i: number = 1
    while (true) {
        i++
        if( i > 100) break
    }

}

// Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// Use of the never type
const numberOrString = (value: number | string):
string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
} 



//////////// TYPE CASTING - ASSERTIONS ////////////

type One = string
type Two = string | number
type Three = 'hello'

// Convert to more or less specefic type

let a: One = 'hello'
let b = a as Two // less specific type
let c = a as Three // more specific type

let d = <One>'world' // less specific type
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return `${a}${b}`
}

let myVal: string = addOrConcat(2,2,'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,2,'concat' /* esto esta mal */) as number

//10 as string // error, debemos usar unknown

(10 as unknown) as string // ok - SE LLAMA FORECASTING O DOUBLE ASSERTION - DOUBLE CASTING

///////////////////////// THE DOM ////////////////////////////////

const img = document.querySelector('img')! // NON NULL ASSERTION More specific type
const myImg = document.getElementById('#img') as HTMLImageElement  // Less specific type
const nextImage = <HTMLImageElement>document.getElementById('#img') // do not work for tsx in react
// If i do not assert the HTMLImageElement type, i cannot access the src property
// IF I assert the type, i can access the src property
img.src

myImg.src // error, SE PUEDE USAR UNA NOT NULL ASSERTION



//////////////////////////// CLASSES ///////////////////////////////////

class Coder {
 
    secondLang!: string 

    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'Typescript'
        ) {
            this.name = name
            this.music = music
            this.age = age
            this.lang = lang
        }
}

const Dave = new Coder('Dave', 'Rock', 42)