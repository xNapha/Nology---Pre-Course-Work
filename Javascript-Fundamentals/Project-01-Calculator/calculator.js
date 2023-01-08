// when buttons are pressed show input on the display
const mainDisplay = document.querySelector("#mainDisplay");
let previousValue = "";
let currentValue = "0";
let currentOperator = "";
let operatorPressedBefore = "";
let isDecimal = false;
let equalPressed = false;
const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => button.addEventListener("click", (event)=>{
  const btnVal = event.target.value;
  switch(btnVal){
    case "/100":
      operatorPressedBefore = "%"
      if(previousValue == ""){
        previousValue = parseFloat(currentValue)/100;
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "+"){
        previousValue = (parseFloat(previousValue) + parseFloat(currentValue))/100;
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "-"){
        previousValue = (parseFloat(previousValue) - parseFloat(currentValue))/100;
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "*"){
        previousValue = (parseFloat(previousValue) * parseFloat(currentValue))/100;
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "/"){
        previousValue = (parseFloat(previousValue) / parseFloat(currentValue))/100;
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "%"){
        previousValue = parseFloat(previousValue)/100
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      }
      currentOperator = "%";
      break;
    case "Clear":
      mainDisplay.innerHTML = "";
      previousValue = "";
      currentValue = "0";
      currentOperator = "";
      operatorPressedBefore = "";
      isDecimal = false;
      equalPressed = false;
      break;
    case "/":
      if(operatorPressedBefore === "/"){
        return;
      }
      operatorPressedBefore = "/";
      if(currentOperator === "/"){
        currentOperator = "/";
        previousValue = parseFloat(previousValue) / parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "-" || currentOperator === "+" || currentOperator ==="*" || currentOperator ==="%"){
        currentOperator = "/";
      } else if(equalPressed){
        currentOperator = "/";
      } else {
        currentOperator = "/";
        previousValue = currentValue;
        currentValue = "";
      }
      break;
    case "*":
      if(operatorPressedBefore === "*"){
        return;
      }
      operatorPressedBefore = "*";
      if(currentOperator === "*"){
        currentOperator = "*";
        previousValue = parseFloat(previousValue) * parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "-" || currentOperator === "+" || currentOperator ==="/" || currentOperator ==="%"){
        currentOperator = "*";
      } else if(equalPressed){
        currentOperator = "*";
      } else {
        currentOperator = "*";
        previousValue = currentValue;
        currentValue = "";
      }
      break;
    case "-":
      if(operatorPressedBefore === "-"){
        return;
      }
      operatorPressedBefore = "-";
      if(currentOperator === "-"){
        currentOperator = "-";
        previousValue = parseFloat(previousValue) - parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "+" || currentOperator === "*" || currentOperator ==="/" || currentOperator ==="%"){
        currentOperator = "-";
      } else if(equalPressed){
        currentOperator = "-";
      } else {
        currentOperator = "-";
        previousValue = currentValue;
        currentValue = "";
      }
      break;
    case "+":
      if(operatorPressedBefore === "+"){
        return;
      }
      operatorPressedBefore = "+";
      if(currentOperator === "+"){
        currentOperator = "+";
        previousValue = parseFloat(previousValue) + parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "-" || currentOperator === "*" || currentOperator ==="/" || currentOperator ==="%"){
        currentOperator = "+";
      } else if(equalPressed){
        currentOperator = "+";
      } else {
        currentOperator = "+";
        previousValue = currentValue;
        currentValue = "";
      }
      break;
    case "=":
      equalPressed = true;
      if(currentOperator === "+"){
        previousValue = parseFloat(previousValue) + parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
      } else if(currentOperator === "-"){
        previousValue = parseFloat(previousValue) - parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
      } else if (currentOperator === "*"){
        previousValue = parseFloat(previousValue) * parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
      } else if (currentOperator === "/"){
        previousValue = parseFloat(previousValue) / parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
      }
      currentOperator = "";
      break;
    case ".":
      if(!isDecimal){
        isDecimal = true;
        currentValue += event.target.value;
        mainDisplay.innerHTML = `${currentValue}`
      }
      break;
    default:
      operatorPressedBefore = false;
      if(currentValue === "0"){
        currentValue = event.target.value;
        mainDisplay.innerHTML = `${currentValue}`;
        return;
      } else if(equalPressed){
        currentValue = event.target.value;
        mainDisplay.innerHTML = `${currentValue}`;
        equalPressed = false;
        return;
      } else {
        currentValue += event.target.value;
        mainDisplay.innerHTML = `${currentValue}`;
      };
  };
}));




