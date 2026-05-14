// class Person {
//   name = "Ali";
// }
// let p1 = new Person();
// console.log(p1);
// class Man {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const p1 = new Man("Ali");
// console.log(p1);
class PersonProfile {
    name;
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`My name is ${this.name}`);
    }
}
let p3 = new PersonProfile("Ahmad");
let p4 = new PersonProfile("Ahmad");
let p5 = new PersonProfile("Ahmad");
console.log(p3);
p3.introduce();
class Animal {
    eat() {
        console.log("Eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking");
    }
}
const d1 = new Dog();
d1.bark();
d1.eat();
export {};
