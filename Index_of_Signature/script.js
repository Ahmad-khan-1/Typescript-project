const obj = {
    name: "Ahmad",
    email: "nome26333@gmail.com"
};
const getName = () => {
    return obj["name"];
};
const getData = () => {
    return obj;
};
const getMultipleData = (keys) => {
    return keys.map((key) => obj[key]);
};
console.log(getName());
console.log(getMultipleData(["name", "email"]));
console.log(getData());
export {};
