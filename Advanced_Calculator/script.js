class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }

    clear() {
        this.currentOperandText = ''
        this.previousOperandText = ''
        this.operation = ''
    }
    delete() {

        this.currentOperandText = this.currentOperandText.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (this.currentOperandText.includes('.') && number == '.') return
        this.currentOperandText = this.currentOperandText.toString() + number.toString()
    }
    chooseOperand(arg) {

        if (this.currentOperandText == "") return;

        if (previousOperand !== '') {
            this.compute();
        }
        this.operation = arg;
        this.previousOperandText = this.currentOperandText + this.operation;
        this.currentOperandText = '';
    }
    updateDisplay() {
        this.currentOperand.innerHTML = this.currentOperandText;
        this.previousOperand.innerText = this.previousOperandText;
    }

    clearAll() {
        this.previousOperandText = '';
        this.currentOperandText = '';
    }
    compute() {
        let result;
        let hoz = parseFloat(this.currentOperandText);
        let ava = parseFloat(this.previousOperandText);
        if (isNaN(hoz) || isNaN(ava)) return
        this.currentOperandText = result;
        this.previousOperandText = ''

        switch (this.operation) {
            case '+':
                result = hoz + ava;
                break;
            case '×':
                result = hoz * ava;
                break;
            case '-':
                result = ava - hoz;
                break;
            case '÷':
                result = ava / hoz;
                break;
            default:
                undefined;
                break;

        }

        this.currentOperandText = result;
        this.previousOperandText = '';

    }
}
let numberButtons = document.querySelectorAll('[data-number]');

let previousOperand = document.querySelector('[data-previous-operand]');
let currentOperand = document.querySelector('[data-current-operand]');
let operand = document.querySelectorAll('[data-operand]');
let dataEqual = document.querySelector('[data-equal]');
let datadel = document.querySelector('[data-del]');
let ac = document.querySelector('[data-all-clear]')
let calculator = new Calculator(previousOperand, currentOperand);

numberButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    })
})


operand.forEach(currentOperand => {
    currentOperand.addEventListener('click', function() {
        calculator.chooseOperand(currentOperand.innerText);
        calculator.updateDisplay();
    })
})

dataEqual.addEventListener('click', function() {
    calculator.compute();
    calculator.updateDisplay();
})

ac.addEventListener('click', function() {
    calculator.clearAll();
    calculator.updateDisplay();
})


datadel.addEventListener('click', function() {
    calculator.delete();
    calculator.updateDisplay();
})