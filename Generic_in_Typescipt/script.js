"use strict";
// const show = <T>(value : T) : T =>{
//   return value
// }
const person1 = {
    name: "Ahmad",
    age: 23
};
const show = (value) => {
    return value;
};
const fun = show(person1);
console.log(fun);
//Array of Generic 
const array = (value) => {
    return value;
};
const arr1 = array([0, 1, 3]);
console.log(arr1);
//pair generic 
const pairvalue = (a, b) => {
    return [a, b];
};
const pair = pairvalue("Ahmad", 20);
console.log(pair);
