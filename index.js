let x;

document.getElementById("rollButton").onclick = function(){
    
    //delay 2sec loading animation --- to do 

    x = Math.floor(Math.random() * 6) + 1;
    document.getElementById("xlabel").innerHTML = x;
    
}

document.getElementById("resetButton").onclick = function(){

    x = 0;
    document.getElementById("xlabel").innerHTML = x;
    
}

