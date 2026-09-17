// This function adds two numbers using the + operator.
function additionFunction() {
    let result = 10 + 5;
    document.getElementById("addResult").innerHTML =
        "10 + 5 = " + result;
}


// This function subtracts one number from another using the - operator.
function subtractionFunction() {
    let result = 10 - 5;
    document.getElementById("subtractResult").innerHTML =
        "10 - 5 = " + result;
}


// This function multiplies two numbers using the * operator.
function multiplicationFunction() {
    let result = 10 * 5;
    document.getElementById("multiplyResult").innerHTML =
        "10 × 5 = " + result;
}


// This function uses the % operator to return the remainder of division.
function modulusFunction() {
    let result = 10 % 3;
    document.getElementById("modulusResult").innerHTML =
        "10 % 3 = " + result;
}


// This function uses the ++ operator to increase a number by 1.
function incrementFunction() {
    let number = 10;
    number++;
    document.getElementById("incrementResult").innerHTML =
        "10 incremented by 1 = " + number;
}


// This function uses the -- operator to decrease a number by 1.
function decrementFunction() {
    let number = 10;
    number--;
    document.getElementById("decrementResult").innerHTML =
        "10 decremented by 1 = " + number;
}


// This function uses Math.random() to generate a random number from 0 to 100.
function randomFunction() {
    let randomNumber = Math.random() * 100;
    document.getElementById("randomResult").innerHTML =
        "Random number: " + randomNumber;
}
