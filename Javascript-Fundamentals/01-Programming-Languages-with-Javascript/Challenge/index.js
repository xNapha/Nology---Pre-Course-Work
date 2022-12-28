function calc(event){
  const curAge = event.target.value;
  (curAge > 65) ? alert("Time to retire"): alert((65 - curAge) + " years left until retirement.");
}

function greetingsInFrench(event){
  switch (event.target.value){
    case "Hello":
      alert("Bonjour")
      break;
    case "Goodbye":
      alert("Au revior");
      break;
    default:
      alert("Not recognised");
  }
}
