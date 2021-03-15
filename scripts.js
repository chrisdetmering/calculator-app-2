const input = document.querySelector(".cal-display");
let mathSymbol = "";
let firstNumber = null;
let secondNumber = null;


document.querySelectorAll('.number').forEach(numberButton => { 
    numberButton.addEventListener("click", () => { 
        const number = parseFloat(numberButton.textContent); 
        
        if (firstNumber === null) { 
            setFirstNumber(number); 
            return;
        }

        if (secondNumber === null) { 
            setSecondNumber(number); 
        }

    });
})




document.querySelector(".input-buttons")
.addEventListener("click", (e)=>{
    let clickedBox = e.target;
    if (firstNumber === null){
        setFirstNumber(clickedBox); 
        return;  
    }

    if (clickedBox.className === "symbol") { 
        mathSymbol = clickedBox.textContent;
        return; 
    }

    if (secondNumber === null) {
        setSecondNumber(clickedBox);
        return; 
    }

    if (secondNumber !== null) {
        const buttonType = clickedBox.className; 
        if (buttonType === "number") { 
            input.textContent += clickedBox.textContent;
            secondNumber = parseFloat(input.textContent);
            return; 
        }

        if (buttonType === "symbol") { 
            const answer = calculate(); 
            const firstNumber = answer; 
            input.textContent = firstNumber; 
            secondNumber = null;
            mathSymbol = buttonType.textContent; 
        } 
        
    }
}); 


document.querySelector(".equals")
.addEventListener("click", () => {
    if (secondNumber !== null && mathSymbol !== "" ){  
        const answer = calculate(); 
        input.textContent = answer; 
        firstNumber = answer; 
        secondNumber = null; 
        mathSymbol = ''; 
    }
});


function setFirstNumber(number) { 
    firstNumber = number; 
    input.textContent += number;
}

function setSecondNumber(button) { 
    
}



function calculate() { 
    switch (mathSymbol){
        case "+":
            return add(firstNumber, secondNumber);     
        case "-":
            return subtract(firstNumber, secondNumber); 
        case "X":
            return multiply(firstNumber, secondNumber);
        case "÷":
            return divide(firstNumber, secondNumber); 
    }
}

function add(num1, num2) { 
    return num1 + num2; 
}

function subtract(num1, num2) { 
    return num1 - num2; 
}

function multiply(num1, num2) { 
    return num1 * num2; 
}

function divide(num1, num2) { 
    return num1 / num2; 
}

document.querySelector(".clear")
.addEventListener('click', ()=>{
    firstNumber = null;
    secondNumber = null;
    mathSymbol = "";
    input.textContent = "";
});