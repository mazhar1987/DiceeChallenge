/* 
=============
Initial Code
============
*/
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var player1 = document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
// var player2 = document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Win Player 1";
// } else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Win Player 2";
// } else {
//     document.querySelector("h1").innerHTML = "Draw";
// }

/* 
=============
Another Code
============
*/

// Random number range is 1 - 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png"; // Select Random images

// Random image source
var randomImageSrc1 = "images/" + randomImage1;
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// Select src attribute from img tag
image1.setAttribute("src", randomImageSrc1);
image2.setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "⛳ Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! ⛳";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}