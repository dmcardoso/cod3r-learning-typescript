// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
 
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
 
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
 
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)

class Motocycle {
    public constructor(public name: string, public speed: number = 0) {}
 
    public honk() {
        console.log('Toooooooooot!')
    }
 
    speedUp (delta: number) {
        this.speed = this.speed + delta
    }
}
 
const moto = new Motocycle('Ducati')
moto.honk()
console.log(moto.speed)
moto.speedUp(30)
console.log(moto.speed)
 
// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
 
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())

abstract class Object2D {
    public constructor(public base: number = 0, public height: number = 0) {}

    abstract area() : number 
}

class Rectangle extends Object2D{
    public area() {
        return this.base * this.height
    }
}

 
const rectangle = new Rectangle(5, 7)
console.log(rectangle.area())
 
// Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
 
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
 
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
class Intern {
    private _firstName: string = ''

    get firstName() {
        return this._firstName
    }

    set firstName(firstName: string) {
        if (firstName.length >= 3) {
            this._firstName = firstName
        } else {
            this._firstName = ''
        }
    }
}
 
const intern = new Intern()
console.log(intern.firstName)
intern.firstName = 'Le'
console.log(intern.firstName)
intern.firstName = 'Leonardo'
console.log(intern.firstName)