const display = document.querySelector(".cal-display");
let operation = null;
let firstNumber = null;
let secondNumber = null;


//Homework: Continuous operations 


document.querySelectorAll('.number').forEach(numberButton => { 
    numberButton.addEventListener("click", () => { 
        if (display.textContent.length >= 10) return; 

        const number = numberButton.textContent; 
            
        if (firstNumber === null) { 
            setFirstNumber(number); 
            display.textContent = firstNumber; 
            return;
        }

        if (firstNumber !== null && operation === null) { 
            newNumber = firstNumber;
            newNumber += number; 
            setFirstNumber(newNumber);
            display.textContent = firstNumber; 
            return; 
        }


        if (secondNumber === null) { 
            setSecondNumber(number); 
            display.textContent = secondNumber; 
            return; 
        }

        if (firstNumber !== null && operation !== null && secondNumber !== null) { 
            newNumber = secondNumber;
            newNumber += number; 
            setSecondNumber(newNumber);
            display.textContent = secondNumber; 
            return;  
        }


    });
})

function setFirstNumber(number) { 
    firstNumber = number; 
}

function setSecondNumber(number) { 
    secondNumber = number; 
}


document.querySelectorAll('.operator').forEach(operator => { 
    operator.addEventListener("click", () => { 
        if (firstNumber !== null) { 
            operation = operator.textContent;
        }
    })
})

document.querySelector(".equals")
.addEventListener("click", () => {
    if (firstNumber !== null && secondNumber !== null && operation !== null ){  
        const answer = calculate(); 
        display.textContent = answer; 
        firstNumber = answer; 
        secondNumber = null; 
        operation = null; 
    }
});


function calculate() { 
    switch (operation){
        case "+":
            return add(firstNumber, secondNumber);     
        case "-":
            return subtract(firstNumber, secondNumber); 
        case "x":
            return multiply(firstNumber, secondNumber);
        case "÷":
            return divide(firstNumber, secondNumber); 
    }
}

function add(num1, num2) { 
    return `${Number(num1) + Number(num2)}`;
}

function subtract(num1, num2) { 
    return `${Number(num1) - Number(num2)}`; 
}

function multiply(num1, num2) { 
    return `${Number(num1) * Number(num2)}`; 
}

function divide(num1, num2) { 
    return `${Number(num1) / Number(num2)}`; 
}

document.querySelector(".clear")
.addEventListener('click', ()=>{
    firstNumber = null;
    secondNumber = null;
    operation = null;
    display.textContent = "";
});

