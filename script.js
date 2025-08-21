const btn7 = document.querySelector("#btn7");

btn7.addEventListener("click", () => {
    const display = document.querySelector(".display");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "7";

    display.appendChild(content);
})

function add(num1, num2){
    return num1 + num2 
};

function minus(num1, num2){
    return num1 - num2
};

function times(num1, num2){
    return num1 * num2
};

function divide(num1, num2){
    return num1 / num2
};

function operate(operator, num1, num2){
    if (operator === "+"){
        return add(num1, num2);
    }
    else if (operator === "-"){
        return minus(num1, num2);
    }
    else if (operator ==="*"){
        return times(num1, num2);
    }
    else if (operator === "/"){
        return divide(num1, num2);
    }
    else {
        console.log("Not the correct operator");
    }
};

let op = operate("/", 1, 2);
console.log(op)