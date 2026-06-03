export {};
const getRandomNumber = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};
console.log(getRandomNumber(["animals", "humans"]));
let firstName: string = "agngi";
console.log(firstName);
let name = "mujtaba";

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 4));
