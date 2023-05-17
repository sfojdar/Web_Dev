var random_number_1 = Math.floor(Math.random()*6+1);
var image_path_1="images/dice"+random_number_1+".png";
var player1= document.getElementById("player1");
player1.setAttribute("src",image_path_1);

var random_number_2 = Math.floor(Math.random()*6+1);
var image_path_2="images/dice"+random_number_2+".png";
var player2= document.getElementById("player2");
player2.setAttribute("src",image_path_2);

if (random_number_1>random_number_2)
{
    document.getElementById("winner").innerHTML= "🚩 Play 1 Wins!";
} 
else if (random_number_1<random_number_2) {
    document.getElementById("winner").innerHTML= "Player 2 Wins! 🚩";
}
else {
    document.getElementById("winner").innerHTML= "Draw!";
    
}
