function add(a, b) {
    return preciseNums(String(a), String(b), '+');
}

function subtract(a, b) {
    return preciseNums(String(a), String(b), '-');
}

function multiply(a, b) {
    return preciseNums(String(a), String(b), '*');
}

function divide(a, b) {
    return preciseNums(String(a), String(b), '/');
}

function preciseNums(a, b, operator) {
    let num1 = a.split('.');
    let num2 = b.split('.');
    let highestNum = num1 > num2 ? num1 : num2;
    
    if (operator == '+') {
        if (highestNum[1] == '') return a + b;
        else {
        factor = 10 * highestNum.length;
        return (a * factor + b * factor) / factor;
        }
    }
    else if (operator == '-') {
        if (highestNum[1] == '') return a - b;
        else {
        factor = 10 * highestNum.length;
        return (a * factor - b * factor) / factor;
        }
    }
    else if (operator == '*') {
        if (highestNum[1] == '') return a * b;
        else {
        factor = 10 * highestNum.length;
        return ((a * factor) * (b * factor)) / (factor * factor);
        }
    }
    else if (operator == '/') {
        if (highestNum[1] == '') return a * b;
        else {
        factor = 10 * highestNum.length;
        return ((a * factor) / (b * factor)) / (factor * factor);
        }
    }
    
}

let firstNum = 0;
let operator = null;

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let nextNum = false;

function buttonPress() {
    buttons.forEach((button) => {
        button.addEventListener('click', e => {
            if (button.textContent == 'Clear') {
                display.textContent = '0';
                firsNum = 0;
                operator = null;
                nextNum = false;
            }
            //else if (button.textContent == )
            else if (display.textContent == 0 && operator =='/' && !Number.isInteger(parseFloat(button.textContent))) {
                display.textContent = 'bruh';
                operator = null;
                nextNum = false;
            }
            else if ((display.textContent == '0' && button.textContent != '.') || display.textContent == 'bruh') {
                console.log('2');
                display.textContent = button.textContent;
            }
            else if (Number.isInteger(parseFloat(button.textContent)) && nextNum == true) {
                console.log('3');
                display.textContent = button.textContent;
                nextNum = false;
            }
            else if (Number.isInteger(parseFloat(button.textContent))) {
                console.log('4');
                display.textContent += button.textContent;
            }
            else if (button.textContent == '.') {
                console.log('.');
                if (display.textContent.includes('.') && nextNum == false);
                else if (nextNum == false) display.textContent += button.textContent;
                else {
                    display.textContent = '0' + button.textContent;
                    nextNum = false;
                }
            }
            else if (button.textContent == '+') {
                if (operator != null) {
                    console.log('add1');
                    display.textContent = operate(firstNum, parseFloat(display.textContent), operator);
                    firstNum = parseFloat(display.textContent);
                    operator = '+';
                    nextNum = true;
                }
                else {
                    console.log('add2');
                    firstNum = parseFloat(display.textContent);
                    operator = '+';
                    nextNum = true;
                }
            }
            else if (button.textContent == '-') {
                if (operator != null) {
                    display.textContent = operate(firstNum, parseFloat(display.textContent), operator);
                    firstNum = parseFloat(display.textContent);
                    operator = '-';
                    nextNum = true;
                }
                else {
                    firstNum = parseFloat(display.textContent);
                    operator = '-';
                    nextNum = true;
                }
            }
            else if (button.textContent == 'x') {
                if (operator != null) {
                    display.textContent = operate(firstNum, parseFloat(display.textContent), operator);
                    firstNum = parseFloat(display.textContent);
                    operator = '*';
                    nextNum = true;
                }
                else {
                    firstNum = parseFloat(display.textContent);
                    operator = '*';
                    nextNum = true;
                }
            }
            else if (button.textContent == '÷') {
                if (operator != null) {
                    display.textContent = operate(firstNum, parseFloat(display.textContent), operator);
                    firstNum = parseFloat(display.textContent);
                    operator = '/';
                    nextNum = true;
                }
                else {
                    firstNum = parseFloat(display.textContent);
                    operator = '/';
                    nextNum = true;
                }
            }
            else if (button.textContent == '=') {
                if (operator == null || nextNum == true);
                else {
                    display.textContent = operate(firstNum, parseFloat(display.textContent), operator);
                    firstNum = parseFloat(display.textContent);
                    operator = null;
                    nextNum = true;
                }
                
            }
            else console.log('nothing');
        });
        
    });
}

buttonPress();
