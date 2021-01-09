class ClassDate {
    public day: number
    month: number
    year: number

    constructor (day: number = 1, month: number = 1, year: number = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

const date = new ClassDate(3,11,1991)
date.day = 4
console.log(date.day);
console.log(date);

class ClassDateExpert {
    constructor (public day: number = 1, public month: number = 1, public year: number = 1970) {
    }
}

const dateExpert = new ClassDate(3,11,1991)
dateExpert.day = 4
console.log(dateExpert.day);
console.log(dateExpert);


class ProductClass {
    constructor(public name: string, public price: number, public discount: number = 0) {}

    public resume(): string {
        return `${this.name} costs R$${this.price} (${this.discount * 100}% off)`
    }
}

const productClassInstance = new ProductClass('Car', 400000, 0.6)
console.log(productClassInstance.resume());

class Car {
    private actualSpeed: number = 0

    constructor(public mark: string, public model: string, private maxSpeed: number = 200) {
    }

    protected updateSpeed(delta: number):number {
        const newSpeed = this.actualSpeed + delta
        const validSpeed = newSpeed >=0 && newSpeed <= this.maxSpeed

        if(validSpeed) {
            this.actualSpeed = newSpeed
        }else {
            this.actualSpeed = delta > 0 ? this.maxSpeed : 0
        }

        return this.actualSpeed
    }

    public accelerate():number {
        return this.updateSpeed(5)
    }

    public brake():number {
        return this.updateSpeed(-5)
    }
}

const carOne = new Car('Ford', 'Ka', 185)
Array(50).fill(0).forEach(() => carOne.accelerate())
console.log(carOne.accelerate());
Array(20).fill(0).forEach(() => carOne.brake())
console.log(carOne.brake())

class Ferrari extends Car {
    
    constructor(model: string, maxSpeed: number) {
        super('Ferrari', model, maxSpeed)
    }

    public accelerate():number {
        return this.updateSpeed(20)
    }

    public brake():number {
        return this.updateSpeed(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.mark} ${f40.model}`);
console.log(f40.accelerate());
console.log(f40.brake());


// Getters & Setters

class Person {
    private _age: number = 0

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if(value >=0 && value <= 120) {
            this._age = value
        }
    }
}

const personObj = {
    _age: 0,
    get age(): number {
        return this._age
    },
    set age(value: number) {
        if(value >=0 && value <= 120) {
            this._age = value
        }
    }
}

const personOne = new Person()
personOne.age = 10
console.log(personOne);

// Static members

class CourseMath {
    static PI: number = 3.1416

    static areaCircle(radius: number): number {
        return this.PI * radius * radius
    }
}

console.log(CourseMath.areaCircle(4));


// Abstract class

abstract class X {
    abstract y(a: number): number 

    w(b: number): void {
        console.log(b);
    }
}

abstract class Calculus {
    protected result: number = 0

    abstract execute(...numbers: number[]): void

    getResult(): number {
        return this.result
    }
}

class Sum extends Calculus {
    execute (...numbers: number[]): void {
        this.result = numbers.reduce((t,a) => t + a)
    }
}

class Mult extends Calculus {
    execute (...numbers: number[]): void {
        this.result = numbers.reduce((t,a) => t * a)
    }
}

const sumOb: Calculus = new Sum()
sumOb.execute(2,3,4,5)
console.log(sumOb.getResult());

const multOb = new Sum()
multOb.execute(2,3,4,5)
console.log(multOb.getResult());


// Singleton

class Unique {
    private static instance: Unique = new Unique()

    private constructor () {}

    static getInstace(): Unique {
        return Unique.instance
    }

    now() {
       return new Date() 
    }
}


// const wrong = new Unique()
const now = Unique.getInstace().now()
console.log(now);


// Read only

class Plane {
    public readonly model: string

    constructor(model: string, public readonly prefix: string) {
        this.model = model
    }
}

const turb = new Plane('Tu-114', 'PT-ABC')
// turb.model = 'DC-8'
// turb.prefix = 'PT-DEF'