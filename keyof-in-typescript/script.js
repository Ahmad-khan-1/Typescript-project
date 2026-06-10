const getKeyofuser = (user, key) => {
    return user[key];
};
const user = {
    name: "Ahmad",
    age: 10,
};
console.log(getKeyofuser(user, "age"));
export {};
