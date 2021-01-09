// let and const
let can = true
console.log(can);

let isCold = true

if(isCold) {
    let action = 'Put'
    console.log(action);
}

const cpf: string = '123'
console.log(cpf);


let secret = 'extern'
function revel() {
    let secret = 'intern'
    console.log(secret);
}

// Arrow function
const sumNumbers = function(n1: number, n2: number): number {
    return n1 + n2
}

console.log(sumNumbers(2, 2));


const subNumbers = (n1: number, n2: number): number => n1 - n2

console.log(subNumbers(2, 3));

const salud = () => console.log('Hello')
salud()

const speakTo = (person: string) => console.log('Hello' + person);

function normalWithThis () {
    // console.log(this);
}

const normalWithEspecialThis = normalWithThis.bind({name: 'Daniel'})
normalWithEspecialThis()

// const arrowWithThis = () => console.log(this)

// const arrowWithEspecialThis = arrowWithThis.bind({name: 'Daniel'})
// normalWithEspecialThis()

// Default params

function regressiveCounting(begin: number = 5, end: number = begin - 5): void {
    console.log(begin);
    while ( begin > end ) {
        begin--
        console.log(begin);
    }
    console.log('End');
}

regressiveCounting();
regressiveCounting(3);

// Rest & spread

const numbers = [1,10,99,-5]

console.log(Math.max(...numbers));

const classA: string[] = ['João', 'Maria', 'Fernanda']
const classB: string[] = ['Fernando', 'Miguel', 'Lorena', ...classA]

function returnArray(   ...args: number[]): number[] {
    return args
}

const numbersArray = returnArray(1,2,3,4,5,6)
console.log(numbersArray);
console.log(returnArray(...numbers));

// Rest & spread (tuple)

const tuple: [number, string, boolean] = [1,'abc', false]

function tupleParams1(a:number, b: string, c:boolean): void {
    console.log(`1) ${a} ${b} ${c}`);
}

tupleParams1(...tuple)

function tupleParams2(...params: [number, string, boolean]): void {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tupleParams2(...tuple)


// Destructuring array

const characteristics = ['Zetec 1.8', 2020]
// const motor = characteristics[0]
// const year = characteristics[1]

const [motor, year] = characteristics
console.log(motor);
console.log(year);

// Destructuring object

const item = {
    name: 'SSD 480gb',
    price: 200,
    characteristics: {
        w: 'import'
    }
}

const itemName = item.name
const itemPrice = item.price
const {name: n, price: p, characteristics: {w}} = item
console.log(n);
console.log(p);
console.log(w);


// Template string

const userEcma: string = 'SuportCod3r'
const notifications: string = '19'
const welcome = 'Welcome ' + userEcma + 'Notifications: ' + notifications
const welcomeTemplate = `
    Welcome ${userEcma}
    Notifications: ${parseInt(notifications) > 9 ? '+9' : notifications}
`
console.log(welcome);
 
// Callback

function waits (callback: (data: string) => void) {
    setTimeout(() => {
        return callback('3s after...')
    }, 3000)
}

waits(function(data) {
    console.log(data);
})

function waitsPromise () {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            return resolve('3s after...')
        }, 3000)
    }) 
}

waitsPromise().then(data => console.log(data))

fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(data => console.log(data))