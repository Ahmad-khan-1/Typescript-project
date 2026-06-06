export {};
interface user {
  name: string | number;
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

interface Profile {
  name: string;
  email: string;
}

interface Admin extends Profile {
  isLoggedIn: boolean;
}

const user: Admin = {
  name: "Ahmad-Mujtaba",
  email: "ahmad@gamil.com",
  isLoggedIn: false,
};
