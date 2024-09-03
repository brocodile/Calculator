let firstNum;
let operator;
let lastNum;

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function divd(a,b){
    return a/b;
}

function operate(num1, num2, op){
    if(op == "+") return add(num1,num2);
    if(op == "-") return sub(num1,num2);    
    if(op == "*") return multi(num1,num2);
    if(op == "/") {
        if(num2 == 0) {return "Error"}
        return divd(num1,num2);
    }
}

let display = document.querySelector("#disp");

const numbers = document.querySelectorAll(".number");
numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        if(!operator){
            if(!firstNum){
                firstNum = btn.textContent;
            }else{
            firstNum += btn.textContent;
            }
            display.textContent = firstNum;
        }else{
            // if operator is given
            if(!lastNum){
                lastNum = btn.textContent;
            }else{
                lastNum += btn.textContent;
            }
            display.textContent = lastNum;
        }
    })
});

const operators = document.querySelectorAll(".operator");
operators.forEach(btn => {
    btn.addEventListener("click", () => {
        if((!operator) || (!lastNum)){
            operator = btn.textContent;
            display.textContent = operator;
        }else{
            let result = operate(Number(firstNum), Number(lastNum), operator);
            // display.textContent = result.toFixed(2);
            lastNum = null;
            operator = btn.textContent;
            display.textContent = btn.textContent;
            firstNum = result.toFixed(2);
        }
    })
})

const equal = document.querySelector("#equals");
equal.addEventListener("click", () => {
    let result = operate(Number(firstNum), Number(lastNum), operator);
    display.textContent = typeof result == "string" ? result : result.toFixed(2);
    lastNum = null;
    operator = null;
    firstNum = result.toFixed(2);
})

const allClear = document.querySelector("#allClear");
allClear.addEventListener("click", () => {
    firstNum = null;
    operator = null;
    lastNum = null;
    display.textContent = null;
})