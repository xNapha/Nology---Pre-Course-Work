// when buttons are pressed show input on the display
const mainDisplay = document.querySelector("#mainDisplay");
let previousValue = "";
let currentValue = "0";
let currentOperator = "";
let isDecimal = false;
const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => button.addEventListener("click", (event)=>{
  const btnVal = event.target.value;
  if(currentOperator != ""){
    
  }
  switch(btnVal){
    case "/100":
      break;
    case "Clear":
      mainDisplay.innerHTML = "";
      previousValue = "";
      currentValue = "0";
      currentOperator = "";
      isDecimal = false;
      equalPressed = false;
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
      currentValue = "";
      break;
    case "=":
      if(currentOperator === "+"){
        previousValue = parseFloat(previousValue) + parseFloat(currentValue)
        mainDisplay.innerHTML = `${previousValue}`
      }
      //currentOperator = "";
      break;
    case ".":
      if(!isDecimal){
        isDecimal = true;
        currentValue += event.target.value;
        mainDisplay.innerHTML = `${currentValue}`
      }
      break;
    default:
      if(currentValue === "0"){
        currentValue = event.target.value;
        mainDisplay.innerHTML = `${currentValue}`;
        return;
      }else if (equalPressed){
        currentValue = event.target.value
        mainDisplay.innerHTML = `${currentValue}`;
        return;
      }
      currentValue += event.target.value;
      mainDisplay.innerHTML = `${currentValue}`;
  };
}));




