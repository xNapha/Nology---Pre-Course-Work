// If a name, is a coaches name, log "It's a coach"
const name = "Paul";
if (name == "Fred"){
  console.log("It's a Coach");
};

// If a greeting, is bonjour, log "comment ca va"
const greeting = "bonjour";
if (greeting == "bonjour"){
  console.log("comment ca va");
};

// If a score, reaches ten, log " you won the game"
let score = 10;
(score === 10) ? console.log("You won the game") : console.log("Better Luck next time");

// If age, is greater than 65, "Time to retire"
let age = 66;
(age > 65)? console.log("Time to retire") : console.log("You've got another "+ (65 - age) + " year(s) left before you retire.")


// If has COVID, log "time to Isolate, else "Keep social Distancing"
let COVID = true;
(COVID) ? console.log("Time to Isolate") : console.log("Keep social distancing");

// If age, greater than 18, and is British, "You can vote in the next election"
let voterAge = 18;
let voterNationality = "British";
(voterAge >= 18 && voterNationality == "British") ? console.log("You can vote in the next election") : console.log("You do not meet the requirements")