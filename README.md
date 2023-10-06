<h1>🎲 ROLLING DICE 🎲</h1>

<h4> TO SEE THE WORKING PROJECT CLICK ON THIS LINK :</h4>🔎  https://1-rolling-dice.netlify.app/

<h4>EXPLAINATION :</h4>

The code snippet you provided is written in JavaScript. 
It appears to handle the functionality of rolling a dice and displaying the result on a webpage. 

The code uses event listeners to trigger actions when certain buttons are clicked. 

When the "rollButton" is clicked, it first checks if a roll is already in progress by checking the value of the "isLoading" variable. 
If a roll is already in progress, it does nothing. Otherwise, it sets "isLoading" to true, displays a loading message, and hides the number display. 

After a 2-second delay (simulated using the setTimeout function), it generates a random number between 1 and 6, 
updates the number display with the generated number, and shows the number display again. 
Finally, it sets "isLoading" to false.

The "resetButton" event listener resets the state of the variables and displays to their initial values.

Please note that this code snippet assumes the existence of HTML elements
with specific IDs ("rollButton", "loading", "number", "resetButton") on the webpage. 
