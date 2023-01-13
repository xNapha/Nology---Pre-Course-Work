// Array of Simple Objects

const fruitObjectArr = [
  {fruit: "apple", rating: 8, price: 150},
  {fruit: "banana", rating: 5, price: 100},
  {fruit: "orange", rating: 6, price: 120}
];


// Iterate over the array to make an array of values

const fruitValueArr = fruitObjectArr.map((fruitObject)=>{
  const fruitValue = fruitObject.fruit;
  return fruitValue
});

// console.log(fruitValueArr)

const searchTerm = "a";

const fruitTermArr = fruitObjectArr.filter((fruitObject)=>{
  const fruitValue = fruitObject.fruit.includes(searchTerm);
  return fruitValue;
})

console.log(fruitTermArr);

// Challenge
/*
Create a function that takes an arr of fruit
-> map over the arr and generate some <li>FRUITNAME</li>
-> turn arr into string
-> return a string
*/

const arrToString = (arr) => {
  const fruitList = arr.map((object)=>{
    const fruit = `<li>${object.fruit}</li>`;

    return fruit;
  })
  return fruitList.join("");
};

console.log(arrToString(fruitObjectArr));

//Arrays of Complex Objects
console.log(fruitObjectArr[2].rating)

/* Challenge
Convert the price to match the format $1.50
Capitalise the first letter of the fruit object

*/

const arrToCard= (arr) => {
  const fruitList = arr.map((object)=>{
    const fruitCard = `
    <div>
      <h1>${object.fruit.substring(0,1).toUpperCase() + object.fruit.substring(1)}</h1>
      <p>$${((object.price)/100).toFixed(2)} each</p>
      <p>${object.rating}/10</p>
    </div>`;

    return fruitCard;
  });
  return fruitList.join("");
};

console.log(arrToCard(fruitObjectArr));

// Sort objects by highest rating first

const sortRatingFirst = fruitObjectArr.sort((a,b)=> {return b.rating-a.rating});
console.log(arrToCard(sortRatingFirst));