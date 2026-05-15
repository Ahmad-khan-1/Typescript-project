export { }
interface Person {
    //    [key : string] :string
    name: string;
    email: string;
}

const obj: Person = {
    name: "Ahmad",
    email: "nome26333@gmail.com"
}

const getName = (): string => {
    return obj["name"]

}
const getData = (): Person => {
    return obj
}

const getMultipleData = (keys: (keyof Person)[]): string[] => {
    return keys.map((key) => obj[key]);
};
console.log(getName());
console.log(getMultipleData(["name", "email"]));
console.log(getData());




