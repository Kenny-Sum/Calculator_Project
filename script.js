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

let num = "";
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

btn0.addEventListener("click", () => {
    display.textContent += "0";
    num += "0"; 
});

btn1.addEventListener("click", () => {
    display.textContent += "1";
    num += "1"; 
});

btn2.addEventListener("click", () => {
    display.textContent += "2";
    num += "2"; 
});

btn3.addEventListener("click", () => {
    
    display.textContent += "3";
    num += "3"; 
});

btn4.addEventListener("click", () => {
    
    display.textContent += "4";
    num += "4"; 
});

btn5.addEventListener("click", () => {
    display.textContent += "5";
    num += "5"; 
});

btn6.addEventListener("click", () => {
    display.textContent += "6";
    num += "6"; 
});

btn7.addEventListener("click", () => {
    display.textContent += "7";
    num += "7"; 
});

btn8.addEventListener("click", () => {
    display.textContent += "8";
    num += "8"; 
});

btn9.addEventListener("click", () => {
    display.textContent += "9";
    num += "9"; 
});

btnDot.addEventListener("click", () => {
    display.textContent += ".";
    num += ".";
});

btnAdd.addEventListener("click", () => {
    if(operator){
        num2 = parseFloat(num);
        num1 = parseFloat(num1);
        result = operate(num1, operator, num2);
        display.textContent = result;
        num1 = result;
        num2 = "";
        num = "";
    }
    if(result){
        num1 = result;
        display.textContent += "+";
    }else{
        num1 = num;
        num = "";
        display.textContent += "+";
    }
    operator = "+";
});

btnMinus.addEventListener("click", () => {
    if(operator){
        num2 = parseFloat(num);
        num1 = parseFloat(num1);
        result = operate(num1, operator, num2);
        display.textContent = result;
        num1 = result;
        num2 = "";
        num = "";
    }
    if(result){
        num1 = result;
    }else{
        num1 = num;
        num = "";
    }
    display.textContent += "-";
    operator = "-";
});

btnMultiply.addEventListener("click", () => {
    if(operator){
        num2 = parseFloat(num);
        num1 = parseFloat(num1);
        result = operate(num1, operator, num2);
        display.textContent = result;
        num1 = result;
        num2 = "";
        num = "";
    }
    if(result){
        num1 = result;
    }else{
        num1 = num;
        num = "";
    }
    display.textContent += "x";
    operator = "*";
});

btnDivide.addEventListener("click", () => {
    if(operator){
        num2 = parseFloat(num);
        num1 = parseFloat(num1);
        result = operate(num1, operator, num2);
        display.textContent = result;
        num1 = result;
        num2 = "";
        num = "";
    }
    if(result){
        num1 = result;
    }else{
        num1 = num;
        num = "";
    }
    display.textContent += "/";
    operator = "/";
});

btnEqual.addEventListener("click", () =>{
    display.textContent = "";
    num2 = parseFloat(num);
    num1 = parseFloat(num1);
    result = operate(num1, operator, num2);
    display.textContent = result;
    num = "";
    num1 = "";
    num2 = "";
    operator = "";

});

btnClear.addEventListener("click", () => {
    display.textContent = "";
    num = "";
    result = "";
    num1 = "";
    num2 = "";
    operator = "";
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
};