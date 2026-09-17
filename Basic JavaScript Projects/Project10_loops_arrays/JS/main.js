// This function uses a while loop to count from 1 to 10.
function count_to_Ten() {
    let number = 1;
    let result = "";

    while (number <= 10) {
        result += number + " ";
        number++;
    }

    document.getElementById("Counting_to_Ten").innerHTML = result;
}

// This function uses a for loop to display a list of instruments.
function for_Loop() {
    let instruments = [
        "Guitar",
        "Drums",
        "Piano",
        "Violin",
        "Trumpet"
    ];

    let content = "";

    for (let i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = content;
}

// This function uses an array and displays one item from it.
function color_array() {
    let colors = [
        "Yellow",
        "Orange",
        "Blue",
        "Green"
    ];

    document.getElementById("Array").innerHTML =
        "One of my favorite colors is " + colors[0] + ".";
}

// This function creates an object using the let keyword.
function car() {
    let vehicle = {
        make: "Toyota",
        model: "Corolla",
        year: 2024,
        color: "White"
    };

    document.getElementById("car").innerHTML =
        "The car is a " +
        vehicle.year + " " +
        vehicle.make + " " +
        vehicle.model +
        " in " +
        vehicle.color + ".";
}
