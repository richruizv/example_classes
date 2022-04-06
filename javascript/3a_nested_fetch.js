fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => {
    console.log("random fact 1:" + data.fact) //printing the first request of facs
    return fetch('https://api.github.com/users/richruizv') //asking for the first second request of facts
  } )
  .then(githubResponse => githubResponse.json())
  .then(githubData => console.log("Name:" + githubData.name)) //printing the second request of facs
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });