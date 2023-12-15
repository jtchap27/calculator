const add = function(...args) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const subtract = function(...args) {
  let sum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    sum -= arguments[i];
  }
  return sum;
}

const multiply = function(...args) {
  let sum = 1;
  for (let i = 0; i < arguments.length; i++) {
    sum *= arguments[i];
  }
  return sum;
}

const divide = function(...args) {
  let sum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    sum /= arguments[i];
  }
  return sum;
}

let num1 = "number 1";
let operator = "operator";
let num2 = "number 2";

let operate = function([a, operator, b]) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

let displayInputArray = [];
let displayValueArray = [];
const displayInput = document.querySelector("#displayInput");
const displayValue = document.querySelector("#displayValue");

const buttonZero = document.querySelector("#zero");
buttonZero.addEventListener("click", () => {
  displayInputArray.push(0);
  displayInput.textContent = displayInputArray;
});

const buttonOne = document.querySelector("#one");
buttonOne.addEventListener("click", () => {
  displayInputArray.push(1);
  displayInput.textContent = displayInputArray;
});

const buttonTwo = document.querySelector("#two");
buttonTwo.addEventListener("click", () => {
  displayInputArray.push(2);
  displayInput.textContent = displayInputArray;
});

const buttonThree = document.querySelector("#three");
buttonThree.addEventListener("click", () => {
  displayInputArray.push(3);
  displayInput.textContent = displayInputArray;
});

const buttonFour = document.querySelector("#four");
buttonFour.addEventListener("click", () => {
  displayInputArray.push(4);
  displayInput.textContent = displayInputArray;
});

const buttonFive = document.querySelector("#five");
buttonFive.addEventListener("click", () => {
  displayInputArray.push(5);
  displayInput.textContent = displayInputArray;
});

const buttonSix = document.querySelector("#six");
buttonSix.addEventListener("click", () => {
  displayInputArray.push(6);
  displayInput.textContent = displayInputArray;
});

const buttonSeven = document.querySelector("#seven");
buttonSeven.addEventListener("click", () => {
  displayInputArray.push(7);
  displayInput.textContent = displayInputArray;
});

const buttonEight = document.querySelector("#eight");
buttonEight.addEventListener("click", () => {
  displayInputArray.push(8);
  displayInput.textContent = displayInputArray;
});

const buttonNine = document.querySelector("#nine");
buttonNine.addEventListener("click", () => {
  displayInputArray.push(9);
  displayInput.textContent = displayInputArray;
});

const buttonDecimal = document.querySelector("#decimal");
buttonDecimal.addEventListener("click", () => {
  displayInputArray.push(".");
  displayInput.textContent = displayInputArray;
});

const buttonPlus = document.querySelector("#plus");
buttonPlus.addEventListener("click", () => {
  if (displayInputArray.length === 3) {
    displayInputArray[0] = operate(displayInputArray);
    displayValueArray[0] = operate(displayInputArray); 
    displayValue.textContent =  displayValueArray[0];
  }
  if (displayValueArray.length > 0) {
    displayInputArray = [];
    displayInputArray[0] = displayValueArray[0];
  };
  displayInputArray.push("+");
  displayInput.textContent = displayInputArray;
});

const buttonSubtract = document.querySelector("#subtract");
buttonSubtract.addEventListener("click", () => {
  if (displayValueArray.length > 0) {
    displayInputArray = [];
    displayInputArray[0] = displayValueArray[0];
  };
  displayInputArray.push("-");
  displayInput.textContent = displayInputArray;
});

const buttonMultiply = document.querySelector("#multiply");
buttonMultiply.addEventListener("click", () => {
  if (displayValueArray.length > 0) {
    displayInputArray = [];
    displayInputArray[0] = displayValueArray[0];
  };
  displayInputArray.push("x");
  displayInput.textContent = displayInputArray;
});

const buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener("click", () => {
  if (displayValueArray.length > 0) {
    displayInputArray = [];
    displayInputArray[0] = displayValueArray[0];
  };
  displayInputArray.push("/");
  displayInput.textContent = displayInputArray;
});

const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", () => {
  displayInputArray = [];
  displayValueArray = [];
  displayInput.textContent = displayInputArray;
  displayValue.textContent = displayValueArray;
});

const buttonEnter = document.querySelector("#enter");
buttonEnter.addEventListener("click", () => {
  displayValueArray[0] = operate(displayInputArray); 
  displayValue.textContent =  displayValueArray[0];
});

