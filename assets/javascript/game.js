$(document).ready(function() {

//Global Variables
var targetNumber = Math.floor((Math.random() * 100) + 19);
var counter = 0;
var wins = 0;
var losses = 0;
var gem = ["assets/images/PurpleGem.png", "assets/images/RedGem.png", "assets/images/SkyBlueGem.png", "assets/images/YellowGem.png", "assets/images/BlueGem.png", "assets/images/PinkGem.png", "assets/images/GreenGem.png"];


//Creates random number for the Gem Values
var numberOptions = function() {
    return Math.floor(Math.random() * 12 + 1);
}
var randomGemValue = Array(4).fill(0).map(numberOptions);
    console.log(randomGemValue);

// Loop to add different gem photo on page, assign random value
for (var i = 0; i < randomGemValue.length; i++) {
    var imageCrystal = $("<img>");
    var randomIndex = Math.floor(Math.random() * gem.length);
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", gem[randomIndex]);
    imageCrystal.attr("data-crystalvalue", randomGemValue[i]);
    $("#crystals").append(imageCrystal);
}

function reset() {
    counter = 0;
    $("#total-guessed").html(counter);
    targetNumber = Math.floor(Math.random() * 100) + 19;
    $("#number-to-guess").text(targetNumber);
    var numberOptions = function() {
        return Math.floor(Math.random() * 12) + 1;
    }
    var randomGemValue = Array(4).fill(0).map(numberOptions);
    $(".crystal-image").each(function() {
        $(this).attr("data-crystalvalue", randomGemValue[Math.floor(Math.random() * gem.length)]);
        $(this).attr("src", gem[Math.floor(Math.random() * gem.length)]);
    });
}


    $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
        counter += crystalValue;

        $("#total-guessed").html(counter);
        //alert("New score: " + counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").html(wins);
            reset();
        } 
        
        else if (counter > targetNumber) {
            losses++;
            $("#losses").html(losses);
            reset();
        }
    });


    $("#number-to-guess").text(targetNumber);
    $("#wins").html(wins);
    $("#losses").html(losses)

});    
