let canal:string = 'Cod3r'

let subscribers: number= 210234

let myName: string = 'Pedro';

(function(){
    let name: string = 'Ana'
    console.log(name);
})()


function sum(a: any, b:any) {
    return a + b;
}

function saud(isMorning: boolean): string {
    let salud: string

    if (isMorning) {
        salud = 'Good morning!'
    }else {
        salud = 'Good life!'
    }

    return salud
}

// Útils
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html