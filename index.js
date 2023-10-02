let isLoading = false;

document.getElementById("rollButton").addEventListener("click", function () {
    if (isLoading) {
        return; // Do nothing if a roll is already in progress
    }

    isLoading = true;
    document.getElementById("loading").style.display = "block";
    document.getElementById("number").style.display = "none"; // Hide the number

    setTimeout(function () {
        isLoading = false;
        document.getElementById("loading").style.display = "none";
        let x = Math.floor(Math.random() * 6) + 1;
        document.getElementById("number").textContent = x;
        document.getElementById("number").style.display = "block"; // Show the number after loading
    }, 2000); // Delay for 2 seconds
});

document.getElementById("resetButton").addEventListener("click", function () {
    isLoading = false;
    document.getElementById("loading").style.display = "none";
    document.getElementById("number").style.display = "block"; // Show the number
    document.getElementById("number").textContent = "0";
});

/* 
 
EXPLAINATION :

The code snippet you provided is written in JavaScript. 
It appears to handle the functionality of rolling a dice and displaying the result on a webpage. 

The code uses event listeners to trigger actions when certain buttons are clicked. 

When the "rollButton" is clicked, it first checks if a roll is already in progress by checking the value of the "isLoading" variable. 
If a roll is already in progress, it does nothing. Otherwise, it sets "isLoading" to true, displays a loading message, and hides the number display. 

After a 2-second delay (simulated using the setTimeout function), it generates a random number between 1 and 6, 
updates the number display with the generated number, and shows the number display again. 
Finally, it sets "isLoading" to false.

The "resetButton" event listener resets the state of the variables and displays to their initial values.

Please note that this code snippet assumes the existence of HTML elements with specific IDs ("rollButton", "loading", "number", "resetButton") on the webpage. 

*/
