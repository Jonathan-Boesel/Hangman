// Computer has a set of phrases
var computerChoices = [
    ["c", "e", "i", "l", "i", "n", "g", "c", "a", "t"],
    ["a", "l", "l", "y", "o", "u", "r", "b", "a", "s", "e"],
    ["r", "i", "c", "k", "r", "o", "l", "l"],
    ["l", "o", "l", "c", "a", "t", "s"],
    ["b", "a", "d", "g", "e", "r"],
    ["l", "e", "e", "r", "o", "y", "j", "e", "n", "k", "i", "n", "s"]
];
// One phrase is randomly selected
var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// A loop is run for the length of the chosen phrase to write the blanks for the selected phrase
var guessedLetters = [];
var answerArray = [];
var missesArray = [];
var guessesLeft = 9;
var winsTotal = 0;
var losesTotal = 0;
document.getElementById("guessesleft").innerHTML = "Guesses remaining: " + guessesLeft;
document.getElementById("loses").innerHTML = "Loses: " + losesTotal
document.getElementById("wins").innerHTML = "Wins: " + winsTotal

for (var i = 0; i < computerPick.length; i++) {
    answerArray[i] = "_";
}
document.getElementById("hangword").innerHTML = answerArray.join(" ")

function reset() {
    computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessedLetters = [];
    answerArray = [];
    missesArray = [];
    guessesLeft = 9;

    for (var i = 0; i < computerPick.length; i++) {
        answerArray[i] = "_";
    }

    document.getElementById("guessesleft").innerHTML = "Guesses remaining: " + guessesLeft;
    document.getElementById("hangword").innerHTML = answerArray.join(" ");
    document.getElementById("misses").innerHTML = missesArray
}

// User inputs a guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    //first if statement prevents keystrokes after a game is won + duplicate guesses
    if ((computerPick.join("") !== answerArray.join("")) && !guessedLetters.includes(userGuess)) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        var tmpArray = [];
        for (var i = 0; i < computerPick.length; i++) {
            if (computerPick[i] === letter) {
                answerArray[i] = letter;
                guessedLetters.push(letter);
                var correct = true;
            }
        }
        if (correct != true) {
            // alert("wrong");
            missesArray.push(letter);
            guessedLetters.push(letter);
            guessesLeft--;
        }

        if (guessesLeft <= 0) {
            losesTotal++;
            reset();
        }

        if (computerPick.join("") === answerArray.join("")) {
            winsTotal++;
            setTimeout(function() { reset(); }, 2000);
        }
        document.getElementById("loses").innerHTML = "Loses: " + losesTotal;
        document.getElementById("wins").innerHTML = "Wins: " + winsTotal;
        document.getElementById("guessesleft").innerHTML = "Guesses remaining: " + guessesLeft;
        document.getElementById("hangword").innerHTML = answerArray.join(" ");
        document.getElementById("misses").innerHTML = missesArray.join(" ");
    };
}
