async function asyncRandomData() {
  //random fact data
  let  response = await fetch('https://catfact.ninja/fact')
  let data = await response.json();

  randomFact = data.fact;
  
  return randomFact
}

asyncRandomData()
  .then(data =>console.log("Random fact: "+ data))
;



//github data
//https://api.github.com/users/{user}