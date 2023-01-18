// Attach event listener to my button
document.querySelector(".translate-btn").addEventListener("click", ()=>{
  // Get the input value
  const englishWord = document.querySelector(".input-box").value;
  
  // if word mathces, put translation into Dom
  if(englishWord === "hello"){
    document.querySelector(".translate-result").innerHTML = "bonjour"
  } else if (englishWord === "goodbye"){
    document.querySelector(".translate-result").innerHTML = "au revoir"
  } else {
    document.querySelector(".translate-result").innerHTML = "unavailable"
  };
});

// Make the code more testable
// Decouple logic
// 1. Function that translate english to french
// 2. Some dom interaction in an event listener

// Accept inputs => return outputs
const translateEnglishToFrench = (englishWord) =>{
  if (englishWord === "hello"){
    return "bonjour"
  } else if (englishWord === "goodbye"){
    return "au revoir"
  } else { 
    return "unavailable"
  }
}