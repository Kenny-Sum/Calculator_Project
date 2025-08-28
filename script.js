const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");
const btnDot = document.querySelector("#btnDot");
const btnAdd = document.querySelector("#btnAdd");
const btnMinus = document.querySelector("#btnMinus");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivide = document.querySelector("#btnDivide");
const btnClear = document.querySelector("#btnClear");

let value = 0;

btn0.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "0";
    const value =+ 0;
});

btn1.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "1";
    const value =+ 1;
});

btn2.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "2";
    const value =+ 2;
});

btn3.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "3";
    const value =+ 3;
});

btn4.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "4";
    const value =+ 4;
});

btn5.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "5";
    const value =+ 5;
});

btn6.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "6";
    const value =+ 6;
});

btn7.addEventListener("click", () => {
    const display = document.querySelector(".display");

    display.textContent += "7";
    const value =+ 7;
});

btn8.addEventListener("click", () => {
    const display = document.querySelector(".display");

    display.textContent += "8";
    const value =+ 8;
    console.log(value)
});

btn9.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "9";
    const value =+ 9;
    console.log(value)
});

btnDot.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += ".";
    
});

btnAdd.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "+";
    
});

btnMinus.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "-";
    
});

btnMultiply.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "x";
    
});

btnDivide.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "/";
    
});

btnClear.addEventListener("click", () => {
    const display = document.querySelector(".display");

    display.textContent = "";
    
});


function add(num1, num2){
    return num1 + num2 
};

function minus(num1, num2){
    return num1 - num2
};

function multiply(num1, num2){
    return num1 * num2
};

function divide(num1, num2){
    return num1 / num2
};

function operate(num1, operator, num2){
    if (operator === "+"){
        return add(num1, num2);
    }
    else if (operator === "-"){
        return minus(num1, num2);
    }
    else if (operator ==="*"){
        return multiply(num1, num2);
    }
    else if (operator === "/"){
        return divide(num1, num2);
    }
    else {
        console.log("Not the correct operator");
    }
};