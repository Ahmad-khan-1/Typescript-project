export {};
function greet(name: string) {
  console.log("hello," + name.toUpperCase() + "!");
}

greet("Ahmad");

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
type FunctionType = (n: number, m: number) => number;
const addTwo: FunctionType = (n, m) => {
  return n * m;
};

console.log(23, 24, 45);
