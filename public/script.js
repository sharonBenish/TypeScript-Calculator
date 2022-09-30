"use strict";
const calcDisplay = document.querySelector('.calculator-display');
const prevDisplay = document.querySelector('.prev-value');
const currentDisplay = document.querySelector('.current-value');
const calcKeys = document.querySelectorAll('.key');
const resetBtn = document.querySelector('.reset');
const delBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');
let variables = [];
let operator;
let displayValue = "";
let result;
let prevKey;
let prevOperator;
calcKeys.forEach((key) => {
    key.addEventListener('click', (e) => {
        const key = e.target;
        if (key.dataset.value) {
            const value = key.dataset.value;
            if (key.classList.contains('operator') && displayValue.length == 0) {
                return;
            }
            else if (key.classList.contains('operator') && displayValue.length > 0) {
                operator = value;
                if (prevKey.type == "operator") {
                    prevDisplay.innerHTML = String(variables[0]) + " " + operator;
                    prevOperator = value;
                    return;
                }
                if (prevKey.type != "equal") {
                    variables.push(Number(displayValue));
                }
                prevDisplay.innerHTML = displayValue + " " + operator;
                currentDisplay.innerHTML = "";
                if (variables.length == 2) {
                    if (!prevOperator) {
                        prevOperator = operator;
                    }
                    result = calculate(variables[0], variables[1], prevOperator);
                    variables = [result];
                    prevDisplay.innerHTML = String(result) + " " + value;
                    currentDisplay.innerHTML = "";
                }
                prevKey = { type: "operator", value: value };
                prevOperator = prevKey.value;
            }
            else {
                if (prevKey && prevKey.type == "operator") {
                    displayValue = "";
                }
                if ((currentDisplay.getBoundingClientRect().width > calcDisplay.getBoundingClientRect().width - 35) || displayValue.length > 16) {
                    return;
                }
                displayValue += value;
                currentDisplay.innerHTML = displayValue;
                prevKey = { type: "digit", value: value };
            }
        }
    });
});
resetBtn.addEventListener('click', () => {
    reset();
});
equalBtn.addEventListener('click', () => {
    //console.log(variables);
    variables.push(Number(displayValue));
    if (variables.length == 2) {
        result = calculate(variables[0], variables[1], prevOperator);
        console.log(result);
        variables = [result];
        displayValue = String(result);
        prevKey = { type: 'equal', value: '=' };
        prevOperator = "";
        prevDisplay.innerHTML = "";
        currentDisplay.innerHTML = displayValue;
    }
});
delBtn.addEventListener('click', () => {
    if (prevKey.type == "operator") {
        return;
    }
    displayValue = displayValue.substring(0, displayValue.length - 1);
    currentDisplay.innerHTML = displayValue;
});
//FUNCTIONS
const reset = () => {
    prevDisplay.innerHTML = "";
    currentDisplay.innerHTML = "";
    displayValue = "";
    operator = "";
    variables = [];
};
const calculate = (var1, var2, operator) => {
    let result;
    if (operator == '+') {
        result = var1 + var2;
    }
    else if (operator == '-') {
        result = var1 - var2;
    }
    else if (operator == '/') {
        result = var1 / var2;
    }
    else if (operator == 'x') {
        result = var1 * var2;
    }
    else {
        result = 0;
    }
    return result;
};
