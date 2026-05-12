function showProduct({ name, id, data_of_birtt }) {
  console.log(id);
  console.log(name);
}
// function showProduct(prodcut: Product) {
//   console.log(prodcut.id);
//   console.log(prodcut.name);
// }
showProduct({
  name: "Ahmad",
  id: 12323,
  data_of_birtt: 1323,
});
export {};

// let api = "http//:google.com"
// function getData(api) {
// return fetch(api).then(res=> res.json());

// }

function fetchDate(callback) {
  let endPoint = "https://www.example.com";
  callback(endPoint);
}

function getUser(endPoint) {
  fetch(`${endPoint}/user`);
}
fetchDate(getUser);
