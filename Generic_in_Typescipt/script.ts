
// const show = <T>(value : T) : T =>{
//   return value
// }

// const fun = show(20)
// const fun3 = show("Ahmad")
// const fun2 = show("Aman")
// console.log(fun);
type Person ={
    name : string ;
    age : number 
}

const person1: Person = {
    name: "Ahmad" ,
    age : 23
}
const show = <T>(value : T) : T =>{
  return value
}

const fun = show<Person>(person1)
console.log(fun);

//Array of Generic 
const array = <T>(value: T[]): T[] => {
  return value
};
const arr1 = array<number>([0, 1 , 3 ])
console.log(arr1);

//pair generic 
const pairvalue = <T,U>(a: T, b:U) => {
  return [a, b]
};
const pair =pairvalue<string, number>("Ahmad" , 20)
console.log(pair);




