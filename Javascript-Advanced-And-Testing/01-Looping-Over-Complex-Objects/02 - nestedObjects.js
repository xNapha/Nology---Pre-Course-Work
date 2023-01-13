const userOne = {
  id: "qwer1234",
  loggedIn: true,
  info:{
    firstName: "nathan",
    lastName: "cai",
    age: 25,
    likes: ["anime", "gaming", "reading", "coding"]
  },
  contact: { 
    email: "abc@def.com",
    contactNumber: "0412 345 678",
    address: {
      houseNumber: "5",
      roadName: "Simple Street",
      postCode: 1234,
      country: "Australia"
    }
  }
};
const userTwo = {
  id: "qwer1234",
  loggedIn: true,
  info:{
    firstName: "nathan",
    lastName: "cai",
    age: 25,
    likes: ["anime", "gaming", "reading", "coding"]
  },
  contact: { 
    email: "abc@def.com",
    contactNumber: "0412 345 678",
    address: {
      houseNumber: "5",
      roadName: "Simple Street",
      postCode: 1234,
      country: "Australia"
    }
  }
};
// console.log(userOne.contact.contactNumber);
// //age
// console.log(userOne.info.age);
// //country
// console.log(userOne.contact.address.country);
// //contact object
// console.log(userOne.contact)

// console.log(userOne.info.likes)

const userArr = [userOne, userTwo];

userArr.forEach(user =>{
  console.log(user.info.likes)
});