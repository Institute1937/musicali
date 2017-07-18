console.log("js")

const endpoint = 'http://localhost:8085';

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => {
    const cities = document.getElementById("cities-div")
    data.cities.map(city => {
      const li = document.createElement('li')
      li.appendChild(document.createTextNode(city))
      cities.appendChild(li)
    });
  });