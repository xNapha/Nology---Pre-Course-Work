const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {
  const fullName = getFullName(firstName, lastName);
  console.log(fullName);

  const msDiffBetweenDates = showTimeDiffBetweenDates(birthday)
  console.log(msDiffBetweenDates)

  console.log(checkForTech(arrayName));
};

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const showTimeDiffBetweenDates = (birthday) => {
  const birthDate = new Date(birthday);
  const todaysDate = new Date();
  const diffBetweenDates = todaysDate.getTime() - birthDate.getTime();
  const MSInDay = 1000 * 3600 * 24;
  const numOfDaysSinceBirth = Math.round(diffBetweenDates/MSInDay)
  return numOfDaysSinceBirth
};

const checkForTech = (headlinesArr) => headlinesArr.filter((headline)=>{return headline.toLowerCase().includes("tech")})

const test = doesLotsOfThings("matt","Bickell","09/26/1993",[
  "Tech is booming",
  "Covid 19 yada yada yada",
  "Economy due for resurgence!",
  "You can retrain in tech too!"
]);

test