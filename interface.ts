export {};
interface user {
  name: string;
  age: number;
}

interface addInfo extends user {
  email: string;
}
let profile: addInfo = {
  name: "Ahmad",
  age: 20,
  email: "aman@gmail.com",
};

console.log(profile.name);
