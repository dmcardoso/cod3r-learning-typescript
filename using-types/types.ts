// string
let names: string = "John"
console.log(names);

// number
let age: number = 27
age = 27.5
console.log(age)

// boolean
let hasHobbies: boolean = false
hasHobbies = true
console.log(hasHobbies);

// explicit types
let myAge
myAge = 27
console.log(myAge);
console.log(typeof myAge);
myAge = 'Daniel'
console.log(myAge);
console.log(typeof myAge);

let myAge2: number
myAge2 = 27
console.log(myAge2);
console.log(typeof myAge2);

// array
let hobbies: string[] = ['Cook', 'Pratice sports']
console.log(hobbies[0]);
console.log(typeof hobbies);
// hobbies = [100]

// tuples
let address: [string, number, number]= ['41', 99, 123]
console.log(address);

address = ['1235', 1236, 1260]


// enums
enum Color {
    Grey, // 0
    Green = 100, // 100
    Blue = 2, // 2
    Orange, // 3
    Yellow,  //4
    Red = 100 // 100
}

let myColor: Color = Color.Green


// any
let car: any = 'BMW'
console.log(car);
car = {
    color: 'Red',
    year: 2019
}
console.log(car);


// functions
function returnMyName(): string {
    return names
}

console.log(returnMyName());


function sayHi(): void {
    console.log('Hi');
}

sayHi()

function multiplies(numberA: number, numberB: number) : number {
    return numberA * numberB
}

console.log(multiplies(2,3));

// function type

let calculus
calculus = sayHi
calculus()

calculus = multiplies
console.log(calculus(1,2));

let calculusTyped: (numberA: number, numberB: number) => number
calculusTyped = multiplies
console.log(calculusTyped(1,2));


// objects
let user: {name: string, age: number} = {
    name: 'João',
    age: 27
}

console.log(user);


// alias
type Employee = {
    supervisors: string[],
    schedule: (hours: number) => string
}

const newEmployee: Employee = {
    supervisors: ['Daniel', 'Maria'],
    schedule(hours) {
        return hours <= 8 ? 'Ok' : 'Not ok'
    }
}

// Union types
let note: (string | number) = 10
console.log(`My note is ${note}!`);
note = '10'
console.log(`My note is ${note}!`);

// Checking types
let value = 30

if(typeof value === 'number') {
    console.log('Is number');
}else {
    console.log(typeof value);
}

// never
function fails(msg: string): never {
    throw new Error(msg)
}

const product = {
    name: 'Printer',
    value: 4,
    validate() {
        if(this.name.trim().length === 0) {
            fails('Needs a name')
        }

        if(this.value <=0) {
            fails('Value invalid')
        }
    }
}

product.validate()


// null check

let highOptional: null | number = 12
highOptional = null

type Contact = {
    name: string,
    phone: string,
    celphone: string | null
}

const firstContact: Contact = {
    name: 'Daniel',
    phone: '123456',
    celphone: null
}

let canBeNull = null
canBeNull = 12
console.log(canBeNull);

canBeNull = 'abc'
console.log(canBeNull);

