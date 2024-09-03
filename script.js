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
    if(op == "/") return divd(num1,num2);
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
        }
    })
    
});