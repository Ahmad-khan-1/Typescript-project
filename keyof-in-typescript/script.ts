export {};
type User = {
  name: string;
  age: number;
};

const getKeyofuser = <user, key extends keyof user>(
  user: User,
  key: keyof User,
) => {
  return user[key];
};
const user: User = {
  name: "Ahmad",
  age: 10,
};

console.log(getKeyofuser(user, "age"));
