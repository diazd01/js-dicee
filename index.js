//creating random number variable
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//pick out a random dice image between 1 and 6
//Left dice:
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
//Right dice:
//creating another random variable:
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Change the text in the h1, (which currently says Refresh Me) to show which user won or
// if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
if(randomNumber1 === randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩Draw🚩";
}else if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";
}else {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩";
}
