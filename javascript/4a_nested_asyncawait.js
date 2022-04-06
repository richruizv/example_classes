async function asyncRandomData() {
  //random fact data
  let  response = await fetch('https://catfact.ninja/fact')
  let data = await response.json();

  //my user in github
  let githubResponse = await fetch('https://api.github.com/users/richruizv')
  let githubData = await githubResponse.json()

  randomFact = data.fact;
  githubname = githubData.name;
  
  return [githubname,randomFact]
}

asyncRandomData()
  .then(data =>console.log(data[0]+ " found that "+ data[1]))
;



//github data
//https://api.github.com/users/{user}