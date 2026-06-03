export {};
const getRandomNumber = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
console.log(getRandomNumber(["animals", "humans"]));
let name = "mujtaba";

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
