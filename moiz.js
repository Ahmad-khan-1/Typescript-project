function fetchData(callback) {
  const api = "https://jsonplaceholder.typicode.com";
  callback(api);
}

function getUser(api) {
  fetch(`${api}/users/1`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

fetchData(getUser);
