let userSelection = null;

function rock() {
    userSelection = "Rock";
}

function paper() {
    userSelection = "Paper";
}

function scissors() {
    userSelection = "Scissors";
}
function clicks() {
    let coin = Math.floor(Math.random() * 3);
    let result = document.getElementById("flips");
        if (coin === 0) {
            result.innerText = rock; if (userSelection === "Rock") {
                console.log("You won");
                userSelection = null;
            }  else {
                (userSelection === "Paper");
                console.log("You lost");
            } else {
                (userSelection === "Scissors");
                console.log("You won");
            }

        }
        result.innerText = paper; if (userSelection === "Paper") {
                console.log("You won");
                userSelection = null;
            }   else {
                (userSelection === "Rock");
                console.log("You won");
            }   else {
                (userSelection === "Scissors");
                console.log("You lost");
            }
        result.innerText = scissors; if (userSelection === "Scissors") {
                console.log("You won");
                userSelection = null;
            } else {
                (userSelection === "Rock");
                console.log("You lost");
            }   else {
                (userSelection === "Paper");
                console.log("You won");
            }
        }
