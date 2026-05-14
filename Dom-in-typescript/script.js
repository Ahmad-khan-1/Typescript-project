"use strict";
document.addEventListener("DOMContentLoaded", () => {
    console.log("dom");
    const button = document.getElementById("btn");
    const output = document.getElementById("output");
    console.log(button);
    button.addEventListener("click", () => {
        console.log("Clicked");
        output.textContent = "Button clicked";
    });
});
const myobj = {
    name: "Abhi",
    email: "abhI@gmail.com",
};
let key = "name";
myobj[key];
const getName = () => {
    return myobj["name"];
};
const getEmail = () => {
    return myobj["email"];
};
const getData = (key) => {
    return myobj[key];
};
getData("name");
