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

// interface Guitarist {
//     name?: string,
//     active: boolean, // Optional
//     albums: (string | number)[],
// }

// let evh: Guitarist = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984, 5150, 'OUB12']
// }

// let jp: Guitarist = {
//     active: true,
//     albums: ['I', 'II', 'IV']
// }

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

///////////////////////////// Type Aliases /////////////////////////////////

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

//////////////////////////////////// FUNCTIONS //////////////////////////////////////

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


//////////////// Optional parameters //////////////////////////////////////////

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
//img.src

//myImg.src // error, SE PUEDE USAR UNA NOT NULL ASSERTION



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
        
    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}
const dave = new Coder('Dave', 'Rock', 42)
// console.log(dave.getAge())
//console.log(dave.age) // Wrong, private only accessible inside the class
// console.log(dave.lang) // Wrong, protected only accessible inside the class and subclasses


// Herencia

class Webdev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
        ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I code in ${this.lang}`
    }
}

const Sara = new Webdev('Mac', 'Sara', 'Lo-fi', 23)
// console.log(Sara.getLang())

/////////////////// INTERFACES /////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string;
    instrument: string;
    
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy Page', 'Guitar')
// console.log(Page.play('strums'))

///////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count // Initizalize the id property with the count property in 1 
    }
}

const John = new Peeps('John')
const Jane = new Peeps('Jane')
const Amy = new Peeps('Amy')

// console.log(Amy.id)
// console.log(Peeps.count)

/////////////////////// SETTERS Y GETTERS /////////////////////////

class Bands {
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[] { // Getter
        return this.dataState
    }

    public set data(value: string[]) { // Setter
        if( Array.isArray(value) && value.every(
            element => typeof element === 'string'
        )) {
            this.dataState = value
        } else {
            throw new Error('Param is not and array of strings')
        }
    }
}

const MyBands = new Bands()
// MyBands.data = ['Van Halen', 'Led Zeppelin', 'The Beatles']
// console.log(MyBands.data)
// MyBands.data = [...MyBands.data, 'The Doors']
// console.log(MyBands.data)
// MyBands.data = ['Van Halen', 5150] // Error
// console.log(MyBands.data)


//////////////////// Index Signatures and Keyof Assertions //////////////////////
// Son para cuando no sabemos que propiedades tendra un objeto, pero sabemos el tipo de dato que tendra y el tamano del objeto.
// Tambien son utiles para acceder dinamicamente a las propiedades de un objeto y para crear objetos genericos que puedan contener cualquier propiedad
interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

// interface TransactionObj {
//     readonly [index: string]: number // Index signature, cant be boolean
// }

const todaysTransactions: TransactionObj = {
    Pizza:-10, // required
    Books: -5, // required
    Job: 50, // required
    Dave: 42 // optional
}

// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'

const todaysNet = (transactions: TransactionObj):
    number => {
        let total = 0
        for (const transaction in transactions){
            total += transactions[transaction]
        }
        return total
    }

// console.log(todaysNet(todaysTransactions))

// // todaysTransactions.Pizza = 20 // Error, readonly

// console.log(todaysTransactions['Dave'])

interface Student {
    //[key: string]: string | number | number[] | undefined // Index signature
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test)

// for (const key in student) {
//     console.log(`${key}: ${student[key as keyof Student]}`) // Si no tenemos un index signature tenemos que hacer un keyof assertion
// }

// Object.keys(student).map(key => {
//     console.log(student[key as keyof typeof student])
// })

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

// logStudentKey(student, 'name')


/////////

// interface Incomes {
//     [key: string]: number
//     //Pizza: string // Error, number expected
// } 
 
type Streams = 'salary' | 'bonus' | 'sideHustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sideHustle: '250'
}

// for (const revenue in monthlyIncomes) {
//     console.log(monthlyIncomes[revenue as keyof Incomes])
// }


////////////////////////// GENERICS /////////////////////////////////

const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

// console.log(isObj(true))
// console.log(isObj('John'))
// console.log(isObj([1, 2, 3]))
// console.log(isObj({name: 'John'}))
// console.log(isObj(null))

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false}
    }
    return { arg, is: !!arg } // !!arg is a double negation - Double Bang Operator
}

// console.log(isTrue(true))
// console.log(isTrue('John'))
// console.log(isTrue([1, 2, 3]))
// console.log(isTrue({name: 'John'}))
// console.log(isTrue(null))

const checkBool = <T>(arg: T): BoolCheck<T> => {
    
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false}
    }
    return { value: arg, is: !!arg } // !!arg is a double negation - Double Bang Operator
} 

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T): T => {
    // process user with logic here
    return user
}

// console.log(processUser({id: 1, name: 'Dave'}))
//console.log(processUser({id: 1, name: 'Dave'}))

const getUsersProperty =  <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}


const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

// console.log(getUsersProperty(usersArray, "email"))
// console.log(getUsersProperty(usersArray, "username"))

class StateObject<T> {
    private data: T

    constructor(data: T){
        this.data = data
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}


const store = new StateObject("John")

// console.log(store.state)
// store.state = 52
// console.log(store.state)

const myState = new StateObject<(string | number | boolean)[]>([15])

myState.state = ['Dave', 42, true]
// console.log(myState.state)




///////////////////////// UTILITY TYPES /////////////////////////////

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
        return  {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: 'Final Project',
    grade: 0
}

console.log(updateAssignment(assign1, {grade: 95}))

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


//////////// Required and ReadOnly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to db, etc
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

// assignVerified.grade = 88 // read only

recordAssignment({ ...assignGraded, verified: true })


//////////// Record

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 96, assign2:  78}
}

//////////// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project"
}


//////////// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

//////////// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>


//////////// ReturnType

// type newAssign = { title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return { title, points}
}

type NewAssign =  ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)

// console.log(tsAssign)


//////////// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['Generics', 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)

// console.log(tsAssign2)


//////////// Awaited - nos ayuda con el ReturnType de una promesa

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch (
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
