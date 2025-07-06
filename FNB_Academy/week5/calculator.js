// Flag to track if a new line of input should be started
var newLine = true;
var value1;
var currentOperator;

/**
 * Handles digit button clicks in a calculator interface
 * @param {string} button - The digit value of the pressed button
 */
function digitBtnPressed(button) {
    if (newLine) {
        // If starting a new line, replace the current value with the pressed digit
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        // If continuing input, append the pressed digit to the current value
        var currentInput = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentInput + button;
    }
}

/**
 * Handles the clear button press
 * Resets the input box to "0" and prepares for new input
 */
function clearBtnPressed() {
    document.getElementById("inputBox").value = "0";
    newLine = true;
}

function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}

function equalsBtnPressed() {
    var value2 = parseInt(document.getElementById("inputBox").value);
    var result;

    switch (currentOperator) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "x":
            result = value1 * value2;
            break;
        case "/":
            if (value2 == 0) {
                result = "Undefined";
                break;
            }
            result = value1 / value2;
            break;
    }
    document.getElementById("inputBox").value = result;
    value1 = 0;
    newLine = true;
}
