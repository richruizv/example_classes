
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  if (req.status == 200) {
    let cat_random_data = JSON.parse(this.responseText);
    console.log(cat_random_data.fact)
  } else {
    myCallback("Error: " + req.status);
  }
}
xhttp.open("GET", "https://catfact.ninja/fact", true);
xhttp.send();

// what if?
//console.log(cat_random_data.fact)