// app.ts
let myname: string = "mesh-zoz";
myname = "zoz"
let age: number = 19
age = 20;
let bol: boolean = false

function f(word: string): string {
    return `hello ${word}`
}
console.log(f("world"))
function say_hay(): void {
    console.log(`hay users`)
}
say_hay()

function any_fun(par: any): any {
    return par
}
console.log(any_fun("string"))

function echoGenericFun<T>(arg: T): T {
    return arg;
}
console.log(echoGenericFun(9999))
