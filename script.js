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
const btnEqual = document.querySelector("#btnEqual");
const btnClear = document.querySelector("#btnClear");
const display = document.querySelector(".display");

let input = "";
let num = "";
let num1 = "";
let num2 = "";
let operator ="";

btn0.addEventListener("click", () => {
    const display = document.querySelector(".display");
    input += "0";
    
    display.textContent = input;
    console.log(input);
});

btn1.addEventListener("click", () => {
    const display = document.querySelector(".display");
    input += "1";
    
    display.textContent = input;
    num = display.textContent;
});

btn2.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "2";
    let num1 =+ display.textContent;
    console.log(num1);
});

btn3.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "3";
});

btn4.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "4";
});

btn5.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "5";
});

btn6.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += "6";
});

btn7.addEventListener("click", () => {
    const display = document.querySelector(".display");

    display.textContent += "7";

});

btn8.addEventListener("click", () => {
    const display = document.querySelector(".display");

    display.textContent += "8";
});

btn9.addEventListener("click", () => {
    const display = document.querySelector(".display");
    display.textContent += "9";
    num += "9"; 
    console.log("current number: " + num);
    
});

btnDot.addEventListener("click", () => {
    const display = document.querySelector(".display");
    
    display.textContent += ".";
    
});

btnAdd.addEventListener("click", () => {
    const display = document.querySelector(".display");
    display.textContent += "+";
    operator = "+";
    num1 = num;
    console.log("num1: " + num1);
    num = "";

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

btnEqual.addEventListener("click", () =>{
    display.textContent = "";
    num2 = Number(num);
    console.log("num2: " + num2);
    num1 = Number(num1);
    console.log("num1: " + num1);
    operator = operator;
    display.textContent = operate(num1, operator, num2);
    console.log(operate(num1, operator, num2));
    

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