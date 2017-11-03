// Computer has a set of phrases
var computerChoices = [
    ["t", "e", "s", "t"],
    ["c", "o", "m", "p", "u", "t", "e", "r"],
    ["w", "o", "r", "d", "s"],
    ["a", "t", "t", "a", "c", "k"]
];
// One phrase is randomly selected
var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// A loop is run for the length of the chosen phrase to write the blanks for the selected phrase
var guessedLetters = [];
console.log(guessedLetters);
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
console.log(answerArray);

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
}

// User inputs a guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    var tmpArray = [];
    // var aLetter = /^[a-z]+$/;
    // if (letter !== /^[a-z]+$/) {
    //     return;
    // }
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
        reset();
    }



    // if ((answerArray[i] === computerPick[i]) || (answerArray[i] === aLetter) || (answerArray[i] === letter)) {
    //         tmpArray.push(computerPick[i]);
    //     }
    //     else if ((computerPick[i] === letter) || (answerArray[i] === letter)) {
    //         tmpArray.push(letter);
    //     }
    //     else {
    //         tmpArray.push("_");
    //     }
    // }

    // answerArray = tmpArray.join(" ");
    console.log(answerArray);
    document.getElementById("loses").innerHTML = "Loses: " + losesTotal;
    document.getElementById("wins").innerHTML = "Wins: " + winsTotal;
    document.getElementById("guessesleft").innerHTML = "Guesses remaining: " + guessesLeft;
    document.getElementById("hangword").innerHTML = answerArray.join(" ");
    document.getElementById("misses").innerHTML = missesArray.join(" ");

    console.log(tmpArray);
    console.log(computerPick);
    // console.log(missesArray);

};
