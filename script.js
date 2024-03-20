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
        add(firstNumber, secondNumber);
        break;
    case "-":
        subtract(firstNumber, secondNumber);
        break;
    case "*":
        multiply(firstNumber, secondNumber);
        break;
    case "/":
        divide(firstNumber, secondNumber);
        break;
    };

};

let display = "";

const numberOne = document.querySelector('#b1');
numberOne.addEventListener("click", () => {
    display = display + "1";
    updateDisplay();
});

const numberTwo = document.querySelector('#b2');
numberOne.addEventListener("click", () => {
    display = display + "2";
    updateDisplay();
});

const numberOne = document.querySelector('#b3');
numberOne.addEventListener("click", () => {
    display = display + "3";
    updateDisplay();
});

const numberOne = document.querySelector('#b4');
numberOne.addEventListener("click", () => {
    display = display + "4";
    updateDisplay();
});

const numberOne = document.querySelector('#b5');
numberOne.addEventListener("click", () => {
    display = display + "5";
    updateDisplay();
});

const numberOne = document.querySelector('#b6');
numberOne.addEventListener("click", () => {
    display = display + "6";
    updateDisplay();
});

const numberOne = document.querySelector('#b7');
numberOne.addEventListener("click", () => {
    display = display + "7";
    updateDisplay();
});

const numberOne = document.querySelector('#b8');
numberOne.addEventListener("click", () => {
    display = display + "8";
    updateDisplay();
});

const numberOne = document.querySelector('#b9');
numberOne.addEventListener("click", () => {
    display = display + "9";
    updateDisplay();
});

const numberOne = document.querySelector('#b0');
numberOne.addEventListener("click", () => {
    display = display + "0";
    updateDisplay();
});

function updateDisplay() {
    const displayText = document.querySelector('#display p');
    displayText.textContent = display;
};