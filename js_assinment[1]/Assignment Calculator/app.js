// select elements

const inputField = document.getElementById("inputField");
const result = document.getElementById("result");

// helper functions
function addNumber(num) {
    inputField.value += num;
}

function addOperator(operator) {
    inputField.value += operator;
}

function clearInput() {
    inputField.value = "";
    result.innerText = "";
}

function deletechar() {
    inputField.value = inputField.value.slice(0, -1);
}

function calculate() {
    var input = document.getElementById("inputField");
    var result = eval(input.value);
    result = result.toFixed(4);
    document.getElementById("result").innerHTML = result;
    input.value = "";
}


