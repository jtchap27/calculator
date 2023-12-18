const add = function(a, b) {
  let answer = a + b;
  +(answer.toFixed(7));
  return answer.toString();
}

const subtract = function(a, b) {
  let answer = a - b;
  +(answer.toFixed(7));
  return answer.toString();
}

const multiply = function(a, b) {
  let answer = a * b;
  +(answer.toFixed(7));
  return answer.toString();
}

const divide = function(a, b) {
  let answer = a / b;
  +(answer.toFixed(7));
  return answer.toString();
}

const calc = {
  firstNum: "",
  op: "",
  secondNum: "",
};

let operate = function(a, operator, b) {
  if (operator === "+") {
    return add(+calc.firstNum, +calc.secondNum);
  } else if (operator === "-") {
    return subtract(+calc.firstNum, +calc.secondNum);
  } else if (operator === "x") {
    return multiply(+calc.firstNum, +calc.secondNum);
  } else if (operator === "/") {
    return divide(+calc.firstNum, +calc.secondNum);
  }
}

let displayInputArray = [];
let displayValueArray = [];
const displayInput = document.querySelector("#displayInput");
const displayValue = document.querySelector("#displayValue");

const buttonZero = document.querySelector("#zero");
buttonZero.addEventListener("click", () => {
  if (calc.firstNum !== "" && calc.op === "") {
    calc.firstNum += 0;
  } else if (calc.op !== "" && calc.secondNum !== "") {
    calc.secondNum += 0;
  };
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonOne = document.querySelector("#one");
buttonOne.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 1 : calc.secondNum += 1
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonTwo = document.querySelector("#two");
buttonTwo.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 2 : calc.secondNum += 2
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonThree = document.querySelector("#three");
buttonThree.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 3 : calc.secondNum += 3;
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonFour = document.querySelector("#four");
buttonFour.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 4 : calc.secondNum += 4
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonFive = document.querySelector("#five");
buttonFive.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 5 : calc.secondNum += 5
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonSix = document.querySelector("#six");
buttonSix.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 6 : calc.secondNum += 6
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonSeven = document.querySelector("#seven");
buttonSeven.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 7 : calc.secondNum += 7
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonEight = document.querySelector("#eight");
buttonEight.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 8 : calc.secondNum += 8
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonNine = document.querySelector("#nine");
buttonNine.addEventListener("click", () => {
  calc.op === "" ? calc.firstNum += 9 : calc.secondNum += 9
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonDecimal = document.querySelector("#decimal");
buttonDecimal.addEventListener("click", () => {
  if (calc.firstNum === "" && !calc.firstNum.includes(".")) {
    calc.firstNum += "0.";
  } else if (calc.op === "" && !calc.firstNum.includes(".")) {
    calc.firstNum += ".";
  };
  if (calc.op !== "" && calc.secondNum === "" && !calc.secondNum.includes(".")) {
    calc.secondNum += "0.";
  } else if (calc.op !== "" && calc.secondNum !== "" && !calc.secondNum.includes(".")) {
    calc.secondNum += ".";
  };
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonPlus = document.querySelector("#plus");
buttonPlus.addEventListener("click", () => {
  if (calc.secondNum !== "") {
    displayValue.textContent = operate(calc.firstNum, calc.op, calc.secondNum);
    calc.firstNum = operate(calc.firstNum, calc.op, calc.secondNum);
    calc.secondNum = "";
  }
  calc.op = "+";
  displayInput.textContent = calc.firstNum + " " + calc.op;
});

const buttonSubtract = document.querySelector("#subtract");
buttonSubtract.addEventListener("click", () => {
  if (calc.secondNum !== "") {
    displayValue.textContent = operate(calc.firstNum, calc.op, calc.secondNum);
    calc.firstNum = operate(calc.firstNum, calc.op, calc.secondNum);
    calc.secondNum = "";
  }
  calc.op = "-";
  displayInput.textContent = calc.firstNum + " " + calc.op;
});

const buttonMultiply = document.querySelector("#multiply");
buttonMultiply.addEventListener("click", () => {
  if (calc.secondNum !== "") {
    displayValue.textContent = operate(calc.firstNum, calc.op, calc.secondNum);
    calc.firstNum = operate(calc.firstNum, calc.op, calc.secondNum);
    calc.secondNum = "";
  }
  calc.op = "x";
  displayInput.textContent = calc.firstNum + " " + calc.op;
});

const buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener("click", () => {
  if (calc.secondNum !== "") {
    displayValue.textContent = operate(calc.firstNum, calc.op, calc.secondNum);
    calc.firstNum = operate(calc.firstNum, calc.op, calc.secondNum);
    calc.secondNum = "";
  }
  calc.op = "/";
  displayInput.textContent = calc.firstNum + " " + calc.op;
});

const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", () => {
  calc.firstNum = "";
  calc.op = "";
  calc.secondNum = "";
  displayInput.textContent = "";
  displayValue.textContent = "";
});

const buttonPlusNeg = document.querySelector("#plusneg");
buttonPlusNeg.addEventListener("click", () => {
  if (calc.op === "") {
    calc.firstNum = calc.firstNum * -1;
  };
  if (calc.secondNum !== "") {
    calc.secondNum = calc.secondNum * -1;
  };
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});


const buttonDelete = document.querySelector("#delete");
buttonDelete.addEventListener("click", () => {
  if (calc.op === "") {
    calc.firstNum = calc.firstNum.slice(0, -1);
  };
  if (calc.op !== "" && calc.secondNum === "") {
    calc.op = "";
  };
  if (calc.secondNum !== "") {
    calc.secondNum = calc.secondNum.slice(0, -1);
  };
  displayInput.textContent = calc.firstNum + " " + calc.op + " " + calc.secondNum;
});

const buttonEnter = document.querySelector("#enter");
buttonEnter.addEventListener("click", () => {
  if (calc.secondNum !== "") {
    displayValue.textContent = operate(calc.firstNum, calc.op, calc.secondNum)
  };
});

