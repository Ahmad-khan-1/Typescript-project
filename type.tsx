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

type User1 = {
  name: string | number;
  id: number;
};
const user: User1[] = [
  {
    name: "Ahmad ",
    id: 23,
  },
  {
    name: "Usman",
    id: 2333,
  },
];

type User = {
  id: number | string;
  name: string;
};

type Admin = User & {
  role: string;
};

const adminUser: Admin = {
  id: 101,
  name: "Alice",
  role: "superadmin",
};
