document.addEventListener("DOMContentLoaded", () => {
  console.log("dom");

  const button = document.getElementById("btn") as HTMLButtonElement;
  const output = document.getElementById("output") as HTMLHeadingElement;

  console.log(button);

  button.addEventListener("click", () => {
    console.log("Clicked");
    output.textContent = "Button clicked";
  });
});

// Keyof & Index Signature

// interface Person {
//   // [key: string]: string;
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "Abhi",
//   email: "abhI@gmail.com",
// };

// let key = "name";

// myobj[key as keyof typeof myobj];

// const getName = (): string => {
//   return myobj["name"];
// };
// const getEmail = (): string => {
//   return myobj["email"];
// };

// const getData = (key: keyof Person): string => {
//   return myobj[key];
// };

// getData("name");
