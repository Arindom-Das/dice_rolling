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


