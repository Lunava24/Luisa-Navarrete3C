// let number = prompt("Enter a numer: ");

// if (number == 0) {
//     console.log("positive number");
// }
//  console.log("nice number");
let userSelection = null;
let computerSelection = null;

function tail() {
    userSelection = "tails";
}

function Head() {
    userSelection = "head";
}

function clicks() {

    if (!userSelection) {
        alert("test")
        exit()
    }

    let coin = Math.floor(Math.random() * 2);
    let result = document.getElementById("flips");

    console.log(coin);

    if (coin === 1) { computerSelection = "head"}
    if (coin === 0) { computerSelection = "tails"}

    console.log(computerSelection);

    if (userSelection === computerSelection) {
            alert("You won :DDDDDDDDDDD");
            userSelection = null;
        }   else {
            alert("You lost ;v")
            userSelection = null;

        }
            result.innerText = computerSelection
            userSelection = null;
    }

