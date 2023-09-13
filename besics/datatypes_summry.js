//#Primitive

//  7 types: String, number, boolean, null, undefind, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined
//let userEmail; we can write also this type


const id = Symbol('123')
const anotherId = ('123')

console.log(id === anotherId);

const bigNumber = 33345678943276n

// Referance (Non Primitive)

//Array, Object, Function


const heros = ["jadumani", "yudhistir", "chakradhar"]
let myObj = {
    name:"jajati",
    age:23,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);

// https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-typeof-operator