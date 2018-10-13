$(document).ready(function() {

// Generates random number to reach when you click on the gems
var targetNumber = Math.floor((Math.random() * 100) + 19);

// Writes the random number to the HTML element on the page
$("#number-to-guess").text(targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;

//Creates random number for the Gem Values
var numberOptions = function() {
    return Math.floor(Math.random() * 12);
}
var randoms = Array(4).fill(0).map(numberOptions);
    console.log(randoms);

// Array for Gem Photos
var gem = ["assets/images/PurpleGem.png", "assets/images/RedGem.png", "assets/images/SkyBlueGem.png", "assets/images/YellowGem.png", "assets/images/BlueGem.png", "assets/images/PinkGem.png", "assets/images/GreenGem.png"];


// Loop to add different gem photo on page, assign random value
for (var i = 0; i < randoms.length; i++) {
    var imageCrystal = $("<img>");
    var randomIndex = Math.floor(Math.random() * gem.length);
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", gem[randomIndex]);
    imageCrystal.attr("data-crystalvalue", randoms[i]);
    $("#crystals").append(imageCrystal);
}

function randomizeCrystal() {
    for (var i = 0; i < 4; i++) {
        randomIndex = Math.floor(Math.random() * gem.length);
        $(".crystal-image").attr("src", gem[i]);
    }
};

function randomizeValues() {
    for (var i = 0; i < 4; i++) {
        var randoms = Array(4).fill(0).map(numberOptions);
    console.log(randoms);
        data-crystalvalue.attr(randoms[i]);
    }
}

function reset() {
    counter = 0;
    $("#total-guessed").html(counter);
    targetNumber = Math.floor((Math.random() * 100) + 19);
    $("#number-to-guess").text(targetNumber);
    randomizeCrystal();
    randomizeValues();
    //randoms = Array(4).fill(0).map(numberOptions);
    //console.log(randoms);
    //$(".crystal-image").attr("data-crystalvalue", randoms[i]);
}


    $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
        counter += crystalValue;

        $("#total-guessed").html(counter);
        //alert("New score: " + counter);

        if (counter === targetNumber) {
            alert("You Win");
            wins++;
            $(".wins").html(wins);
            reset();
        } 
        
        else if (counter > targetNumber) {
            alert("You lose");
            losses++;
            $(".losses").html(losses);
            reset();
        }
    });



    $(".wins").html(wins);
    $(".losses").html(losses)

});    
