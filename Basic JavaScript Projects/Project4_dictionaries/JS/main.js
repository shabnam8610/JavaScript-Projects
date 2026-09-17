// This function creates and uses a JavaScript dictionary object.
function my_Dictionary() {

    // Create a dictionary with key-value pairs.
    const Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark"
    };

    // Delete the Sound key before trying to display its value.
    delete Animal.Sound;

    // Display the value of the deleted key in the HTML element.
    // Because the key was deleted, the result will be "undefined".
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
