class Calculator {
    constructor(number) {
        this.number = number;
    }

    static compareplus(calculatorA, calculatorB) {
        document.getElementById('result').innerHTML = Number(calculatorA.number + calculatorB.number);
    };
    static compareminus(calculatorA, calculatorB) {
        document.getElementById('result').innerHTML = Number(calculatorA.number - calculatorB.number);
    };
    static comparemultiplication(calculatorA, calculatorB) {
        document.getElementById('result').innerHTML = Number(calculatorA.number * calculatorB.number);
    };
    static comparedivision(calculatorA, calculatorB) {
        document.getElementById('result').innerHTML = Number(calculatorA.number / calculatorB.number);
    };


}

function plus() {
    let calculators = [
        new Calculator(Number(document.getElementById(`number2`).value)),
        new Calculator(Number(document.getElementById(`number1`).value))
    ];
    calculators.sort(Calculator.compareplus);
}

function minus() {
    let calculators = [
        new Calculator(Number(document.getElementById(`number2`).value)),
        new Calculator(Number(document.getElementById(`number1`).value))
    ];
    calculators.sort(Calculator.compareminus);
}

function multiplication() {
    let calculators = [
        new Calculator(Number(document.getElementById(`number2`).value)),
        new Calculator(Number(document.getElementById(`number1`).value))
    ];
    calculators.sort(Calculator.comparemultiplication);
}

function division() {
    let calculators = [
        new Calculator(Number(document.getElementById(`number2`).value)),
        new Calculator(Number(document.getElementById(`number1`).value))
    ];
    calculators.sort(Calculator.comparedivision);
}