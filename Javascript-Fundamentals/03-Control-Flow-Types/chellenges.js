/* 
Create an if statement to check if a number is positive or negative.
Use an if statement to determine the greatest of three numbers
*/
const num = 64;
const arrOfNums = [56,-23,111]

if (num >= 0){
  console.log("Number is positive")
} else {
  console.log("number is negative")
}

let greatestNum = 0;

for (let i = 0; i < arrOfNums.length; i++){
  if (greatestNum <= arrOfNums[i]){
    greatestNum = arrOfNums[i];
  }
}
console.log(greatestNum);
/*
Create a "Days until the weekend" switch case. Given a day, e.g. "Tuesday" log "Only 3 more days until the weekend."
If the day isn't recognised, use a default to show "Sorry we didn't recognise that day."
*/

function daysTilWeekend(day){
  switch(day.toLowerCase()){
    case "monday":
      console.log("4 more days until the weekend")
      break;
    case "tuesday":
      console.log("3 more days until the weekend")
      break;
    case "wednesday":
      console.log("2 more days until the weekend")
      break;
    case "thursday":
      console.log("1 more day until the weekend")
      break;
    case "friday":
      console.log("Tomorrow is the weekend")
      break;
    case "saturday":
      console.log("1 more day until the start of the work week")
      break;
    case "sunday":
      console.log("Tomorrow is the start of the work week")
      break;
    default:
      console.log("Sorry we didn't recognise that day.")
      break;
  }
}
let day = "tuesday"
daysTilWeekend(day)


/* 
Create a switch case for vegetable prices at a supermarket.
It should have potatoes and carrots as the SAME PRICE per kg, but brocolli, cabbage, and asparagus as different prices
*/

function vegPrices(vegetable){
  const showPrice = document.getElementById("result");
  switch(vegetable.toLowerCase()){
    case "brocolli":
      showPrice.textContent = "$4 per kg";
      break;
    case "cabbage":
      showPrice.textContent = "$4 per one";
      break;
    case "asparagus":
      showPrice.textContent = "$10 per kg";
      break;
    case "potatoe": case "carrot":
      showPrice.textContent = "$2 per kg";
      break;
    default:
      showPrice.textContent = "Please enter a vegetable";
      break;
  }
}
let vegetable = "potatoe"
vegPrices(vegetable);

/*
Extension Build a front end for the last switchcase. Use a dropdown box with Onchange rather than onblur, and alert/show the price of each vegetable
*/