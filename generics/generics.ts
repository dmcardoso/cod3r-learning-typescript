function echo(object: any) {
    return object
}
console.log(echo('Hello').length);

function echoBetter<T extends Object>(object: T): T {
    return object
}

console.log(echoBetter(27));


const avails: Array<number> = [10, 9.3, 7.7]
avails.push(8.4)
// avails.push('5.5')
console.log(avails);

function printing<T>(args: T[]) {
    args.forEach(el => console.log(el));
}

printing([1,2,3])
printing<number>([1,2,3])
printing<{name: string}>([{name: 'Daniel'},{name: 'Daniel'},{name: 'Daniel'}])



// Type generics
type Echo = <T>(data: T) => T
const callPrint: Echo = echoBetter
console.log(callPrint<string>('Something'));

// Class with Generics
class BinaryOperation {
    constructor (public operator1: any, public operator2: any) {}

    execute() {
        return this.operator1 + this.operator2
    }
}

console.log(new BinaryOperation('Bom ','dia').execute());
console.log(new BinaryOperation(3,7).execute());
console.log(new BinaryOperation(3,'Opa').execute());
console.log(new BinaryOperation({},{}).execute());

abstract class BinaryOperationGenerics1<T, R> {
    constructor (public operator1: T, public operator2: T) {}

    abstract execute(): R
}

class SumBinary extends BinaryOperationGenerics1<number, number> {
    public execute() {
        return this.operator1 + this.operator2
    }
}

console.log(new SumBinary(3,7).execute());

class DateBetweekDates extends BinaryOperationGenerics1<ClassDate, string> {
    getTime(date: ClassDate): number {
        let {day,month,year} = date

        return new Date(`${month}/${day}/${year}`).getTime()
    }
    public execute() {
        const t1 = this.getTime(this.operator1)
        const t2 = this.getTime(this.operator2)
        const diff = Math.abs(t1 - t2)
        const day = 1000 * 60 * 60 * 24

        return `${Math.ceil(diff / day)} day(s)`
    }
}

console.log(new DateBetweekDates(new ClassDate(1,5,2020),new ClassDate(5,2,2020)).execute());

class Queue<T extends number> {
    private queue: T[]
    constructor(...queue: T[]) {
        this.queue = queue
    }

    public push(element: T) {
        this.queue.push(element)
    }

    public next(): T | null {
        if(this.queue.length <= 0 || !this.queue[0]) {
            return null
        }

        const first = this.queue[0]
        this.queue.splice(0, 1);

        return first
    }

    public print() {
        console.log(this.queue);
    }
}

const queue = new Queue<number>(1, 2)

queue.print()
queue.push(3)
queue.print()
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
queue.print()


interface MappInterface<K,V> {
    key: K
    value: V
}

class Mapp<K, V> {
    private maps: MappInterface<K, V>[] = []

    public put(element: MappInterface<K,V>) {
        this.maps.push(element)
    }

    public clear() {
        this.maps = []
    }

    public print() {
        console.log(this.maps)
    }

    public get(key: K): MappInterface<K, V> | null {
        const mapKey = this.maps.find(map => map.key === key)
        if(!mapKey) {
            return null
        }

        return mapKey
    }
}

const mapp = new Mapp<number, string>()
mapp.put({key: 4, value: 'Daniel'})

console.log(mapp.get(4));
mapp.print()
mapp.clear()
mapp.print()
