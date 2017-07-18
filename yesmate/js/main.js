console.log("js")

const endpoint = 'http://localhost:8085';
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => console.log(data));