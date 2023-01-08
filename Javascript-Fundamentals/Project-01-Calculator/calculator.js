// when buttons are pressed show input on the display
const mainDisplay = document.querySelector("#mainDisplay");
let previousValue = "0";
let currentValue = "";
let currentOperator = "";
let equalsPressed = false;
const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => button.addEventListener("click", (event)=>{
  const btnVal = event.target.value;
  if(currentOperator != ""){
    
  }
  switch(btnVal){
    case "(":
      break;
    case ")":
      break;
    case "/100":
      break;
    case "Clear":
      break;
    case "/":
      currentOperator = "/";
      break;
    case "*":
      currentOperator = "*";
      break;
    case "-":
      currentOperator = "-";
      break;
    case "+":
      currentOperator = "+";
      previousValue = currentValue;
      break;
    case "=":
      equalsPressed = true;
      break;
    case ".":
      break;
    default:
      currentValue += event.target.value;
      mainDisplay.innerHTML += `${event.target.value}`;
  };
}));

function addition(previous, current){
  mainDisplay.innerHTML = ` ${parseInt(previous) + parseInt(current)}`;
}



