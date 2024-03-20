function add(a, b) {
    return(a + b);
};

function subtract(a, b) {
    return(a - b);
};

function multiply(a, b) {
    return(a * b);
};

function divide(a, b) {
    return(a / b);
};

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function operate(op) {
    switch (op) {
    case "+":
        return(add(parseFloat(firstNumber), parseFloat(secondNumber)));
    case "-":
        return(subtract(parseFloat(irstNumber), parseFloat(secondNumber)));
    case "*":
        return(multiply(parseFloat(firstNumber), parseFloat(secondNumber)));
    case "/":
        return(divide(parseFloat(firstNumber), parseFloat(secondNumber)));
    };

};

let display = "";

//event listeners for all buttons
//after each click update the display
const numberOne = document.querySelector('#b1');
numberOne.addEventListener("click", () => {
    display = display + "1";
    updateDisplay();
});

const numberTwo = document.querySelector('#b2');
numberTwo.addEventListener("click", () => {
    display = display + "2";
    updateDisplay();
});

const numberThree = document.querySelector('#b3');
numberThree.addEventListener("click", () => {
    display = display + "3";
    updateDisplay();
});

const numberFour = document.querySelector('#b4');
numberFour.addEventListener("click", () => {
    display = display + "4";
    updateDisplay();
});

const numberFive = document.querySelector('#b5');
numberFive.addEventListener("click", () => {
    display = display + "5";
    updateDisplay();
});

const numberSix = document.querySelector('#b6');
numberSix.addEventListener("click", () => {
    display = display + "6";
    updateDisplay();
});

const numberSeven = document.querySelector('#b7');
numberSeven.addEventListener("click", () => {
    display = display + "7";
    updateDisplay();
});

const numberEight = document.querySelector('#b8');
numberEight.addEventListener("click", () => {
    display = display + "8";
    updateDisplay();
});

const numberNine = document.querySelector('#b9');
numberNine.addEventListener("click", () => {
    display = display + "9";
    updateDisplay();
});

// zero button - check we are not dividing by zero
const numberZero = document.querySelector('#b0');
numberZero.addEventListener("click", () => {
    if (display.endsWith() === "/") {
        display = display + "0";
        updateDisplay();
    } else {
        alert("You cannot divide by zero! Please try again.");
    }
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener("click", () => {
    if (!display.includes(".")) {
        display = display + ".";
        updateDisplay();
    }
});

const addition = document.querySelector('#add');
addition.addEventListener("click", () => {
    operator = "+";
    display = display + " + ";
    updateDisplay();
});

const subtraction = document.querySelector('#subtract');
subtraction.addEventListener("click", () => {
    operator = "-";
    display = display + " - ";
    updateDisplay();
});

const multiplication = document.querySelector('#multiply');
multiplication.addEventListener("click", () => {
    operator = "*";
    display = display + " * ";
    updateDisplay();
});

const dividing = document.querySelector('#divide');
dividing.addEventListener("click", () => {
    operator = "/";
    display = display + " / ";
    updateDisplay();
});

const equals = document.querySelector('#equalsButton');
equals.addEventListener("click", () => {
    calculate();
});

const clear = document.querySelector('#clearButton');
clear.addEventListener("click", () => {
    display = "";
    updateDisplay();
});

//remove last character from the input string
const backspace = document.querySelector('#backspaceButton');
backspace.addEventListener("click", () => {
    display = display.substring(0, display.length - 1);
    updateDisplay();
});

//update the display of the calulator
function updateDisplay() {
    const displayText = document.querySelector('#display p');
    displayText.textContent = display;
};

function calculate() {
    let equationArray = display.split(' ');
    let newNumber = 0;
    while (equationArray.length > 1) {
        console.table(equationArray);
        firstNumber = equationArray[0];
        equationArray.shift();
        operator = equationArray[0];
        equationArray.shift();
        secondNumber = equationArray[0];
        equationArray.shift();
        newNumber = operate(operator);
        console.table(equationArray);
        equationArray.unshift(newNumber);
        console.table(equationArray);
    };
    equationArray[0] = equationArray[0].toFixed(3);
    display = equationArray.toString();
    updateDisplay();
};