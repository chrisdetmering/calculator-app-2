//FOCUS: SRP 
const display = document.querySelector(".cal-display");

let operation = null;
let firstNumber = null;
let secondNumber= null;

//homework. 
//1. make subtraction, multiplication, and division functions
//2. allow for numbers bigger than 1 digit 
//3. make continuous operations 

document.querySelectorAll(".number").forEach(numberButton => { 
    numberButton.addEventListener('click', () => { 
        const number = numberButton.textContent

        if (firstNumber === null) { 
            firstNumber = number; 
            display.textContent = firstNumber; 
            return; 
        }

        if (secondNumber === null && operation !== null) { 
            secondNumber = number; 
            display.textContent = secondNumber; 
            return; 
        }
    })
})

document.querySelectorAll(".operation").forEach(operationButton => { 
    operationButton.addEventListener('click', () => { 
        const selectedOperation = operationButton.textContent; 

        if (operation === null && firstNumber !== null) { 
            operation = selectedOperation;
            return; 
        }
    })
})


document.querySelector(".equals")
.addEventListener("click", () => {
    if (firstNumber !== null && operation !== null && secondNumber !== null) { 
        const answer = calculate(); 
        firstNumber = answer; 
        operation = null; 
        secondNumber = null; 
        display.textContent = firstNumber; 
    }
})


function calculate() { 
    switch (operation){
        case "+":
            return add();        
        case "-":
           //TODO
        case "x":
           //TODO
        case "÷":
           //TODO
    }
}


function add() { 
    return `${Number(firstNumber) + Number(secondNumber)}`; 
}
//TODO
//subtract 
//multiply 
//divide


document.querySelector(".clear")
.addEventListener('click', ()=>{
    firstNumber = null;
    secondNumber = null;
    operation = null;
    display.textContent = "";
})