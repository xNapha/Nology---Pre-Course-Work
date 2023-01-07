// when buttons are pressed show input on the display
const mainDisplay = document.querySelector("#mainDisplay");
let previousValue = "";
let currentValue = "";
let previousOperator = "";
let equalsPressed = false;
const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => button.addEventListener("click", (event)=>{
  const btnVal = event.target.value;
  switch(btnVal){
    case "(":
      mainDisplay.innerHTML += ` ${event.target.value}`;
      break;
    case ")":
      mainDisplay.innerHTML += ` ${event.target.value}`;
      break;
    case "/100":
      if(currentValue == "" || currentValue == "0"){
        alert("Enter a valid number before proceeding")
      } else{
        mainDisplay.innerHTML = `${currentValue/100}%`
        previousValue = currentValue/100;
        previousOperator = "%";
      }
      break;
    case "Clear":
      break;
    case "/":
      mainDisplay.innerHTML += ` ${event.target.value}`;
      break;
    case "*":
      mainDisplay.innerHTML += ` ${event.target.value}`;
      break;
    case "-":
      mainDisplay.innerHTML += ` ${event.target.value}`;
      break;
    case "+":
      mainDisplay.innerHTML += ` ${event.target.value}`;
      previousOperator = "+";
      break;
    case "=":
      if(previousOperator == "+"){
        previousValue = parseInt(currentValue) + parseInt(previousValue);
        mainDisplay.innerHTML = ` ${previousValue}`;
        equalsPressed = true;
      }
      break;
    case ".":
      mainDisplay.innerHTML += ` ${event.target.value}`;
      break;
    default:
      if(equalsPressed){
        previousValue = "";
        currentValue = event.target.value;
        mainDisplay.innerHTML = `${event.target.value}`
        equalsPressed = false;
      } else if(previousOperator == "+"){
        previousValue = currentValue;
        mainDisplay.innerHTML += ` ${currentValue}`
      }else if(previousOperator == "%"){
        previousValue = "";
        mainDisplay.innerHTML = ` ${event.target.value}`;
      }else{
        currentValue += event.target.value;
        mainDisplay.innerHTML += `${event.target.value}`
      }
  };
}));



