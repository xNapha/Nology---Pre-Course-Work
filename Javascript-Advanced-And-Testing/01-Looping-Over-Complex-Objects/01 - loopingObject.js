const message = {
  userName:"Nathan",
  content:"Blah",
  number:7,
};

for (let key in message){
  key;
  message[key];
}

/* 
Create a function that loops through a message object
Check that all of the values are strings
You will return true if they are and false otherwise
*/
// My Answer
/*
for (let key in message){
  if(typeof message[key]=="string"){
    console.log(true);
  } else{
    console.log(false);
  };
};
*/
// Charlies Answer

// const validateMessageObject = (messageObject) =>{
//   for(let key in messageObject){
//     const typeCheck = typeof messageObject[key] !=="string";
//     if(typeCheck){
//       return false;
//     };
//   };
//   return true;
// };

//console.log(validateMessageObject(message));

// Getting Values/Keys from object Part 1

const validMessageValues = Object.values(message);
const validMessageKeys = Object.keys(message);
const validMessages = Object.entries(message);

// console.log(validMessageValues.every(x => typeof x == "string"))
// console.log(validMessageKeys)
// console.log(validMessages)

// Getting Values/Keys from Object Part 2

// Write a function that will check the keys of a message object
// valid keys ["userName", "content"];
// return true for valid and false fo invalid

const validMessage = {
  userName: "Name",
  content: "content",
}
const invalidMessage = {
  userName: "Name",
  error: "content",
}

const checkObject = (object) =>{
  const validKeys = ["userName", "content"];
  const keysToCheck = Object.keys(object);

  return keysToCheck.every(key=>{return validKeys.includes(key)})
};

// console.log(checkObject(validMessage))
// console.log(checkObject(invalidMessage))

//Object.entries()

const validMessageEntries = Object.entries(validMessage);
const invalidMessageEntries = Object.entries(invalidMessage);

const validateMessageObject = (messageObject) => {
  const objectEntries = Object.entries(messageObject);

  const validation = objectEntries.every((entry) =>{
    const key = entry[0];
    const value = entry[1];

    // Check the type of value
    const typeCheck = typeof value == "string";
    
    // Check if key is valid
    const validKeys = ["userName", "content"];
    const keyCheck = validKeys.includes(key);
    return typeCheck && keyCheck;
  });
  return validation;
};

// console.log(validateMessageObject(validMessage))
// console.log(validateMessageObject(invalidMessage))