let leftOperand = 5;
let rightOperand = 3;
let operator = "*";

let result;

switch (operator){
    case "+":
        result = leftOperand + rightOperand;
        break;
    case "-":
        result = leftOperand - rightOperand;
        break;
    case "*":
        result = leftOperand * rightOperand;
        break;
    case "/":
        result = leftOperand / rightOperand;
        break;  
    default:
        console.log("Invalid operator ")
        break;          
    }

    console.log(result)
