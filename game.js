var buttonColours = new Array["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$("button").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    var randomChosenColour = buttnColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}

function playSound(name) {
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    },100);
}
