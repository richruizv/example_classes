fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => console.log("Random fact:" +data.fact))
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });