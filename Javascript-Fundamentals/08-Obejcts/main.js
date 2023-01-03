/*
// OBJECT SYNTAX
const exampleObject = {
  key : "value", //comma for additional keys 
  types : "any",
  method(){
    // do something
    // to reference any "key" use => this."key"
    // returns something
    return `${this.key} ${this.types}`;
  }
};

// To Access Objects˜
// using dot notation
console.log(exampleObject.key)
console.log(exampleObject.types)
// calling a method
console.log(exampleObject.method());
// squarebrackets notation (use square bracket notation when there is a space in the key)
console.log(exampleObject["types"])
console.log(exampleObject["key"])
*/


const studentsCon = document.querySelector(".studentsCon");

const person = {
  firstName : "Nathan",
  lastName : "Cai",
  quote: "It doesn't get easier you just go faster",
  skills: ["HTML", "CSS", "JavaScript"],
  imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
  getSkills(){
    var skillString = "";
    this.skills.forEach((skill)=>{
      skillString += `<li>${skill}</li>`
    })
    return skillString
  },
  /*
  //FIRST NAME & LAST NAME ONTO THE CONSOLE
  fullName(){
    return `${this.firstName} ${this.lastName}`
  },
  */
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  },
  getHTML(){
    const HTML = `<article class="studentCard">
    <img src=${this.imgURL}>
    <h2>${this.getFullName()}</h2>
    <blockquote>${this.quote}</blockquote>
    <h3>Skills</h3>
    <ul>${this.getSkills()}</ul>
    </article>`;
    return HTML;
  }
};
//studentsCon.innerHTML = person.getHTML();


/*
studentsCon.innerHTML = `
<article class="studentCard">
  <img src=${person.imgURL}>
  <h2>${person.getFullName()}</h2>
  <blockquote>${person.quote}</blockquote>
  <h3>Skills</h3>
  <ul>${person.getSkills()}</ul>
</article>`
*/
//ADD A METHOD ONTO THE PERSON OBJECT THAT RETURNS THE SAME HTML
// I WANT YOU TO USE THE "THIS" KEYWORD
// ADD IT TO THE HTML

//Write a method on the person object that uses the skills array
// iterate over the skills array and generate a list item for each skill
//console.log(person.getSkills());

//person.age = 30
//console.log(person);
//console.log(person.fullName());

// GET THE RESULTS OF THE METHOD ONTO THE CONSOLE
//console.log(person.getFullName());

//https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png


// CLASS SYNTAX

// PascalCase -> naming convention for classes
// class ExampleClass{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName,this.lastName = lastName,this.age = age
//   };
//   greet(){
//     let greeting = `Hello ${this.firstName} ${this.lastName}`
//     return greeting;
//   }
// };
// CLASS INHERITANCE SYNTAX

// class ExtendedClass extends ExampleClass{
//   constructor(firstName, lastName, age, subject){
//     super(firstName, lastName, age),this.subject = subject;
//   };
//   greet(){
//     let teacherGreeting = `Hi I am Mr.${this.lastName} and this is class is for ${this.subject}.`
//     return teacherGreeting
//   }
// }
// console.log(new ExtendedClass("Charlie", "Richardson", 30, "JavaSript").greet())


// const nathan = new ExampleClass("Nathan", "Cai",25);
// const bob = new ExampleClass("Bob", "Bill", 30);
// console.log(nathan.greet())
// console.log(bob.greet())

class Person{
  constructor(firstName, lastName, quote, skills, imgURL){
    this.firstName = firstName,
    this.lastName = lastName,
    this.quote = quote, 
    this.skills = skills,
    this.imgURL = imgURL
  };
  getSkills(){
    const skillsString = this.skills.map(skill=>`<li>${skill}</li>`);
    return skillsString.join('');
  };
  getFullName(){
    let fullName = `${this.firstName} ${this.lastName}`
    return fullName;
  };
  getHTML(){
    const HTML = `<article class="studentCard">
    <img src=${this.imgURL}>
    <h2>${this.getFullName()}</h2>
    <blockquote>${this.quote}</blockquote>
    <h3>Skills</h3>
    <ul>${this.getSkills()}</ul>
    </article>`;
    return HTML;
  };
};

class VIP extends Person{
  constructor(firstName, lastName, quote, skills, imgURL, contactLink){
    super(firstName, lastName, quote, skills, imgURL),
    this.contactLink = contactLink
  };
  getHTML(){
    const HTML = `<article class="studentCard">
    <img src="${this.imgURL}">
    <h2>${this.getFullName()}</h2>
    <blockquote>${this.quote}</blockquote>
    <h3>Skills</h3>
    <ul>${this.getSkills()}</ul>
    <a href=${this.contactLink} target="blank">Contact me</a>
    </article>`;
    return HTML;
  };
}

const jim = new Person(
  "Jim", 
  "Harper", 
  "Dammit Jim",
  ["Salesman", "Comedic", "Stubborn"], 
  "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
);
const pam = new Person(
  "Pam", 
  "Harper", 
  "Dammit Michael",
  ["Salesman", "Comedic", "Stubborn"], 
  "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
);
const michael = new VIP(
  "Michael",
  "Scott",
  "Snip, Snap, Snip, Snap",
  ["Nothing", "Nothing","Nothing"],
  "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
  "https://www.google.com"
)
// console.log(jim.getSkills())
// console.log(jim.getFullName())
// console.log(jim.getHTML())


studentsCon.innerHTML += jim.getHTML();
studentsCon.innerHTML += pam.getHTML();
studentsCon.innerHTML += michael.getHTML();



