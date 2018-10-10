$(document).ready(function() {

// Generates random number to reach when you click on the gems
var targetNumber = Math.floor((Math.random() * 100) + 19);

// Writes the random number to the HTML element on the page
$("#number-to-guess").text(targetNumber);

var counter = 0;
var wins = 0
var losses = 0

//Creates random number for the Gem Values
var numberOptions = function() {
    return Math.floor(Math.random() * 12);
}
var randoms = Array(4).fill(0).map(numberOptions);
    console.log(randoms);

// Array for Gem Photos
var gem = ["assets/images/PurpleGem.png", "assets/images/RedGem.png", "assets/images/SkyBlueGem.png", "assets/images/YellowGem.png"];


// ?? Maybe Generate Random Gem Photo in For Loop ??


// Loop to add different gem photo on page, assign random value
for (var i = 0; i < randoms.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", gem[i]);
    imageCrystal.attr("data-crystalvalue", randoms[i]);
    $("#crystals").append(imageCrystal);
}


    $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
        counter += crystalValue;

        $("#total-guessed").html(counter);
        //alert("New score: " + counter);

        if (counter === targetNumber) {
            wins++;
        } 
        
        else if (counter > targetNumber) {
            losses++;
        }
    });

$(".wins").html(wins);
$(".losses").html(losses);

});    
