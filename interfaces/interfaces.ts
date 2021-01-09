interface Personification {
    name: string
    age?: number
    [prop: string]: any
    salud(lastname: string): void
}

function sayHiTwice(person: Personification) {
    console.log('Hello, ' + person.name);
}

function changeName(person: Personification) {
    person.name = 'No name'
}

const person: Personification = {
    name: 'Daniel',
    age: 27,
    salud(lastname: string) {
        console.log('Helo, my name is ' + this.name + ' ' + lastname);
    }
}

sayHiTwice(person)
changeName(person)
sayHiTwice(person)
person.salud('Moreira')

class Client implements Personification {
    name: string = ''
    
    salud(lastname: string) {
        console.log('Helo, my name is ' + this.name + ' ' + lastname);
    }
}

const myClient = new Client()
myClient.name = 'Han'
sayHiTwice(myClient)
myClient.salud('Solo')

interface CalculusFunction {
    (a: number, b: number): number
}

let pot: CalculusFunction

pot = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t,a) => t*a)
}

console.log(pot(3,10));

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A,B {
    c(): void
}

class RealA implements A {
    a() {}
}

class RealB implements B {
    b() {}
}

class RealAB implements A,B {
    a() {}
    b() {}
}

class RealABC implements ABC {
    a() {}
    b() {}
    c() {}
}

function test(b: B) {
    console.log(b);
}

test(new RealABC())

abstract class AbstractABD implements A,B{
    a() {}
    b() {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const xx = 2
const yy = 3
const zz = 4

console.log();

xx.log();
yy.log();
zz.log();

const cli = {
    name: 'Daniel',
    toString() {
        return this.name
    }
}

cli.log()
