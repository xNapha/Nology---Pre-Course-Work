/* 
Write a function name getDescription that:
Takes 4 arguments: number of children, partner's name , geographic location , job title.
Outputs your statement to the console like so: "I am currently a X living in Y married to Z with N kids."
Call that function 3 times with 3 different values for the arguments
*/

function getDescription(numOfChildren, partnerName, location, jobTitle){
  return `I am currently a ${jobTitle} living in ${location} married to ${partnerName} with ${numOfChildren} kids.`
}

console.log(getDescription(3, "Susan", "Melbourne", "Social Worker"))
console.log(getDescription(5, "Bob", "Queensland", "Dentist"))
console.log(getDescription(2, "Ashley", "China", "Lawyer"))

/* 
The Lifetime Supply of Snickers 

Ever wonder how much a lifetime supply of snickers would actaully be? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for the rest of your life (based on a constant max age).
- outputs the result to the screen like so: "You will need X to last you until the  ripe old age of Y"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(currAge, amountPerDay){
  const maxAge = 90
  let daysLeft = (maxAge - currAge)*365.25;
  let amountNeeded = daysLeft * amountPerDay

  return `You will need ${Math.ceil(amountNeeded)} to last you until the ripe old age of 90.`
}
console.log(calculateSupply(45,1))
console.log(calculateSupply(28,4))
console.log(calculateSupply(28,2.5))
console.log(calculateSupply(28,12))

/* 
The Temperature Converter
Its hot out! Not. Let's make a calsius/farenheit converter.
*/

function tempConverter(temp, isFarenheit = true){
  if(isFarenheit){
    return `${temp} degrees Celcius is ${temp *(9/5) + 32} degrees Farenheit`
  } else{
    return `${temp} degrees Farenheit is ${(temp - 32) * 5/9} degrees Celcius`
  }
}
console.log(tempConverter(23,false))
console.log(tempConverter(23))

/* 
Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!
*/
function puppyAge(humanYears){
  return `Your puppy is ${humanYears * 7} years old in dog years`
}
console.log(puppyAge(1))