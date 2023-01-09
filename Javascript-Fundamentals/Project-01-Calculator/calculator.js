const mainDisplay = document.querySelector("#mainDisplay");
let previousValue = "";
let currentValue = "0";
let currentOperator = "";
let operatorPressedBefore = "";
let negativePressed = false;
let isDecimal = false;
let equalPressed = false;
let displayPressed = "light"
const displayBtn = document.querySelector("#mode");
const operatorDisplay = document.querySelector("#operatorDisplay");
const buttons = document.querySelectorAll("input");
const main = document.querySelector("main");
buttons.forEach(button => button.addEventListener("click", (event)=>{
  switch(event.path[0].value){
    case "Display":
      if(displayPressed == "light"){
        displayPressed = "dark";
        document.querySelectorAll(`[value]`).forEach(button => {
          if(button.value == "Display"){
            return;
          } else{
            button.removeAttribute("src",`./imgs/light - ${button.value}.png`);
            button.setAttribute("src",`./imgs/dark - ${button.value}.png`);
            return;
          }
          });
        main.classList.remove("light");
        main.classList.add("dark")
        displayBtn.removeAttribute("src",'./imgs/light - moon.png');
        displayBtn.setAttribute("src",'./imgs/dark - sun.png');
      } else{
        displayPressed = "light";
        document.querySelectorAll(`[value]`).forEach(button => {
          if(button.value == "Display"){
            return;
          }else{
            button.removeAttribute("src",`./imgs/dark - ${button.value}.png`);
            button.setAttribute("src",`./imgs/light - ${button.value}.png`);
            return;
          }
          });
          main.classList.remove("dark");
          main.classList.add("light")
          displayBtn.removeAttribute("src",'./imgs/dark - sun.png');
          displayBtn.setAttribute("src",'./imgs/light - moon.png');
      };
      break;
    case "negative":
      negativePressed = true;
      if(previousValue == "" && currentValue == "0"){
        return;
      }else if(previousValue == ""){
        previousValue = parseFloat(currentValue)* -1;
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(negativePressed){
        previousValue = parseFloat(previousValue)*-1;
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else{
        currentValue = parseFloat(currentValue)*-1
        mainDisplay.innerHTML = `${currentValue}`;
      }
      negativePressed = false;
      break;
    case "percentage":
      operatorPressedBefore = "%";
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
        previousValue = parseFloat(previousValue)/100;
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      }
      currentOperator = "%";
      break;
    case "clear":
      mainDisplay.innerHTML = "";
      previousValue = "";
      currentValue = "0";
      currentOperator = "";
      operatorDisplay.innerHTML = "";
      operatorPressedBefore = "";
      isDecimal = false;
      equalPressed = false;
      negativePressed = false;
      break;
    case "division":
      if(operatorPressedBefore === "/"){
        return;
      }
      operatorPressedBefore = "/";
      if(currentOperator === "/"){
        currentOperator = "/";
        operatorDisplay.innerHTML = "/";
        previousValue = parseFloat(previousValue) / parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "-" || currentOperator === "+" || currentOperator ==="*" || currentOperator ==="%"){
        currentOperator = "/";
        operatorDisplay.innerHTML = "/";
      } else if(equalPressed){
        currentOperator = "/";
        operatorDisplay.innerHTML = "/";
      } else {
        currentOperator = "/";
        operatorDisplay.innerHTML = "/";
        previousValue = currentValue;
        currentValue = "";
      }
      break;
    case "multiply":
      if(operatorPressedBefore === "*"){
        return;
      }
      operatorPressedBefore = "*";
      if(currentOperator === "*"){
        currentOperator = "*";
        operatorDisplay.innerHTML = "*";
        previousValue = parseFloat(previousValue) * parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "-" || currentOperator === "+" || currentOperator ==="/" || currentOperator ==="%"){
        currentOperator = "*";
        operatorDisplay.innerHTML = "*";
      } else if(equalPressed){
        currentOperator = "*";
        operatorDisplay.innerHTML = "*";
      } else {
        currentOperator = "*";
        operatorDisplay.innerHTML = "*";
        previousValue = currentValue;
        currentValue = "";
      }
      break;
    case "minus":
      if(operatorPressedBefore === "-"){
        return;
      }
      operatorPressedBefore = "-";
      if(currentOperator === "-"){
        currentOperator = "-";
        operatorDisplay.innerHTML = "-";
        previousValue = parseFloat(previousValue) - parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "+" || currentOperator === "*" || currentOperator ==="/" || currentOperator ==="%"){
        currentOperator = "-";
        operatorDisplay.innerHTML = "-";
      } else if(equalPressed){
        currentOperator = "-";
        operatorDisplay.innerHTML = "-";
      } else {
        currentOperator = "-";
        operatorDisplay.innerHTML = "-";
        previousValue = currentValue;
        currentValue = "";
      }
      break;
    case "plus":
      if(operatorPressedBefore === "+"){
        return;
      }
      operatorPressedBefore = "+";
      if(currentOperator === "+"){
        currentOperator = "+";
        operatorDisplay.innerHTML = "+";
        previousValue = parseFloat(previousValue) + parseFloat(currentValue);
        mainDisplay.innerHTML = `${previousValue}`;
        currentValue = "";
      } else if(currentOperator === "-" || currentOperator === "*" || currentOperator ==="/" || currentOperator ==="%"){
        currentOperator = "+";
        operatorDisplay.innerHTML = "+";
      } else if(equalPressed){
        currentOperator = "+";
        operatorDisplay.innerHTML = "+";
      } else {
        currentOperator = "+";
        operatorDisplay.innerHTML = "+";
        previousValue = currentValue;
        currentValue = "";
      }
      break;
    case "equal":
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
      operatorDisplay.innerHTML = "";
      break;
    case "dot":
      if(!isDecimal){
        isDecimal = true;
        currentValue += ".";
        mainDisplay.innerHTML = `${currentValue}`
      };
      break;
    default:
      operatorPressedBefore = false;
      if(currentValue === "0"){
        currentValue = event.path[0].value;
        mainDisplay.innerHTML = `${currentValue}`;
        return;
      } else if(equalPressed){
        currentValue = event.path[0].value;
        mainDisplay.innerHTML = `${currentValue}`;
        equalPressed = false;
        return;
      } else {
        currentValue += event.path[0].value;
        mainDisplay.innerHTML = `${currentValue}`;
      };
  };
}));