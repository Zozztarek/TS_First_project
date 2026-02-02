// converting TS to JS 
// "C:\Program Files\nodejs\node.exe" "C:\Users\Zero\AppData\Roaming\npm\node_modules\typescript\bin\tsc" app.ts
// show JS output
// "C:\Program Files\nodejs\node.exe" app.js
// app.ts
var myname = "mesh-zoz";
myname = "zoz";
var age = 19;
age = 20;
var bol = false;
function f(word) {
    return "hello ".concat(word);
}
console.log(f("world"));
function say_hay() {
    console.log("hay users");
}
say_hay();
function any_fun(par) {
    return par;
}
console.log(any_fun("string"));
function echoGenericFun(arg) {
    return arg;
}
console.log(echoGenericFun(9999));
