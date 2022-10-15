export const calculate = (var1, var2, operator) => {
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
