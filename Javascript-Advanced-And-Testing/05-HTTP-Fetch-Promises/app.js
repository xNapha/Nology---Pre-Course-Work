/*
let samsPromise = new Promise((resolve,reject) => {
  let a = 1 + 2;
  if(a == 2){
    resolve("Success.");
  } else {
    reject("Failed.");
  };
});

samsPromise
  .then((message) => {
    console.log(`${message} I am in the THEN`);
  })
  .catch((message) => {
    console.log(`${message} I am in the CATCH`);
  })
*/


// https://randomuser.me/api
/*
const getRandomUser = () => {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then(json => document.querySelector("body").innerHTML = `<p>${json.results[0].name.first}</p>`)
    .catch(err => console.log(err))
};

getRandomUser();
*/


// https://api.punkapi.com/v2/beers/random
/* 
attirbutes to include in the card
- Name (h1)
- Tagline (h4)
- Description (p)
- abv (h2/3)
- the first food that it pairs well with (p)
*/

const getRandomBeer = () =>{
  const body = document.querySelector("body")
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(json => {body.innerHTML = makeBeerCard(json[0])})
    .catch(err => console.log(err))
};

const makeBeerCard = (beerInfo) =>{
  return `
    <div>
      <h1>${beerInfo.name}</h1>
      <h2>${beerInfo.abv}</h2>
      <h3>${beerInfo.tagline}</h3>
      <p>${beerInfo.description}</p>
      <h4>Pairs well with:</h5>
      <p>${beerInfo.food_pairing[0]}</p>
    </div>`;
};

getRandomBeer();