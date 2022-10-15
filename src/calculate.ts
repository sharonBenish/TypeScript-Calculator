export const calculate = (var1:number, var2:number, operator:string)=>{
    let result:number;
    if (operator == '+'){
        result = var1 + var2;
    } else if (operator == '-'){
        result = var1 - var2;
    } else if (operator == '/'){
        result = var1 / var2;
    } else if (operator == 'x'){
        result = var1 * var2;
    } else {
        result = 0;
    }
    return result
}
