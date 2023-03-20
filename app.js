// step 01. taking the input values
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const total = document.getElementById("total");

// add function
function add() {
    if (numOne.value && numTwo.value) {
        let sum = parseInt(numOne.value) + parseInt(numTwo.value);
        total.innerText = sum;
    }
    else {
        alert("Fill all of the input")
    }
}

//subtract function
function subtract() {
    if (numOne.value && numTwo.value) {
        let sum = parseInt(numOne.value) - parseInt(numTwo.value);
        total.innerText = sum;
    }
    else {
        alert("Fill all of the input")
    }
}

//division function
function division() {
    if (numOne.value && numTwo.value) {
        let sum = parseInt(numOne.value) / parseInt(numTwo.value);
        total.innerText = sum.toFixed(2);
    }
    else {
        alert("Fill all of the input")
    }
}

//multiply function
function multiply() {
    if (numOne.value && numTwo.value) {
        let sum = parseInt(numOne.value) * parseInt(numTwo.value);
        total.innerText = sum;
    }
    else {
        alert("Fill all of the input")
    }
}

//reset
function reset() {
    numOne.value = "";
    numTwo.value = "";
    total.innerHTML = "";
}