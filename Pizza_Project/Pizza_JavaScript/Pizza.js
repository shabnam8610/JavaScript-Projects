// This function is called when the user clicks the "Place Order" button.
function getReceipt() {
    // Start the order total at zero.
    let runningTotal = 0;

    // This string will contain the items that appear on the receipt.
    let sizeText = "";
    let toppingText = "";

    // Get all pizza-size radio buttons from the page.
    const sizeArray = document.getElementsByClassName("size");

    // Check each size button to find the selected pizza size.
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            sizeText = sizeArray[i].value;
        }
    }

    // Add the price of the selected pizza size.
    if (sizeText === "Personal Pizza") {
        runningTotal = 6;
    } else if (sizeText === "Small Pizza") {
        runningTotal = 8;
    } else if (sizeText === "Medium Pizza") {
        runningTotal = 10;
    } else if (sizeText === "Large Pizza") {
        runningTotal = 14;
    } else if (sizeText === "Extra Large Pizza") {
        runningTotal = 16;
    }

    // Save the selected size and its price for the receipt.
    const sizeTotal = runningTotal;

    // Get all topping checkboxes from the page.
    const toppingArray = document.getElementsByClassName("toppings");

    // Store selected toppings in an array.
    const selectedToppings = [];

    // Check each topping and add selected toppings to the array.
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedToppings.push(toppingArray[i].value);
        }
    }

    // The first topping is free.
    // Every additional topping costs $1.
    let toppingTotal = 0;
    if (selectedToppings.length > 1) {
        toppingTotal = selectedToppings.length - 1;
    }

    // Add topping cost to the running total.
    runningTotal += toppingTotal;

    // Build the topping text that will be displayed on the receipt.
    if (selectedToppings.length === 0) {
        toppingText = "No extra toppings";
    } else {
        toppingText = selectedToppings.join("<br>");
    }

    // Create the final receipt text.
    const receipt =
        "<strong>Order:</strong><br>" +
        sizeText + " - $" + sizeTotal.toFixed(2) + "<br><br>" +
        "<strong>Toppings:</strong><br>" +
        toppingText + "<br><br>" +
        "Topping charge: $" + toppingTotal.toFixed(2);

    // Display the receipt on the page.
    document.getElementById("showText").innerHTML = receipt;

    // Display the final order total.
    document.getElementById("totalPrice").innerHTML =
        "Total: $" + runningTotal.toFixed(2);
}


// This function clears the receipt when the user clicks Reset.
function resetReceipt() {
    // Use a short delay so the form reset happens first.
    setTimeout(function () {
        document.getElementById("showText").innerHTML = "";
        document.getElementById("totalPrice").innerHTML = "";
    }, 0);
}
