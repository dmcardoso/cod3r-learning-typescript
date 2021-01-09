
function logClass(constructor: Function){
    console.log(constructor);
}


function clearDecorator(_: Function) {}

function logClassIf(value: boolean){
    return value ? logClass : clearDecorator
}

type Constructor = { new (...args: any[]): {}}

function logObject(contructor: Constructor){
    return class extends contructor {
        constructor(...args: any[]) {
            console.log('After...');
            super(...args)
            console.log('Before...');            
        }
    }
}

interface ApplianceNew {
    print?(): void
}


// @logClass
// @logClassIf(true)
// @logObject
// @printable
class ApplianceNew {
    constructor() {
        console.log('Constructor');
    }
}

function printable(constructor: Function) {
    constructor.prototype.print = function() {
        console.log(this);
    }
}

const appliancenew = new ApplianceNew()
appliancenew.print && appliancenew.print()

const loggedUser = {
    name: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

@adminProfile
class AdministativeChange {
    critic() {
        console.log('Something critic has changed!')
    }
}
 
new AdministativeChange().critic()

function adminProfile<T extends Constructor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)

            if(!loggedUser || !loggedUser.admin) {
                // throw new Error('No permission!')
            }
        }
    }
}

class UserBankAccount {
    @notNegative
    private balance: number

    constructor(balance: number) {
        this.balance = balance
    }

    @freeze
    public withDrawn(@paramInfo value: number): boolean {
        if (value <= this.balance) {
            this.balance -= value
            return true
        }else {
            return false
        }
    }

    @freeze
    public getBalance() {
        return this.balance
    }
}

const uba = new UserBankAccount(10248.57)
uba.withDrawn(5000)
console.log(uba.getBalance());

// uba.getBalance = function() {
//     return this['balance'] + 7000
// }

console.log(uba.getBalance());

// Object.freeze()
function freeze(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(name);
    console.log(descriptor);
    
    descriptor.writable = false
}

function notNegative(target: any, name: string){
    delete target[name]
    Object.defineProperty(target, name, {
        get: function(): any {
            return target['_' + name]
        },
        set: function(value: any): void {
            if (value < 0) {
                throw new Error('Invalid')
            }else {
                target['_' + name] = value
            }
        }
    })
}

function paramInfo(target: any, name: string, indexParam: number) {
    console.log(target);
    console.log(name);
    console.log('indexParam', indexParam);
}