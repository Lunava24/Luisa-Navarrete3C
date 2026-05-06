// let userSelection = null;

// function rock() {
//     userSelection = "Rock";
// }

// function paper() {
//     userSelection = "Paper";
// }

// function scissors() {
//     userSelection = "Scissors";
// }
// function clicks() {
//     let coin = Math.floor(Math.random() * 3);
//     let result = document.getElementById("flips");
//         if (coin === 0) {
//             result.innerText = rock; if (userSelection === "Rock") {
//                 console.log("You won");
//                 userSelection = null;
//             }  else {
//                 (userSelection === "Paper");
//                 console.log("You lost");
//             } else {
//                 (userSelection === "Scissors");
//                 console.log("You won");
//             }

//         }
//         result.innerText = paper; if (userSelection === "Paper") {
//                 console.log("You won");
//                 userSelection = null;
//             }   else {
//                 (userSelection === "Rock");
//                 console.log("You won");
//             }   else {
//                 (userSelection === "Scissors");
//                 console.log("You lost");
//             }
//         result.innerText = scissors; if (userSelection === "Scissors") {
//                 console.log("You won");
//                 userSelection = null;
//             } else {
//                 (userSelection === "Rock");
//                 console.log("You lost");
//             }   else {
//                 (userSelection === "Paper");
//                 console.log("You won");
//             }
//         }
function game(userChoice) {
    let randomNum = Math.random();
    let compChoice;
    if (randomNum < 0.33) {
        compChoice = "Rock";
    } else if (randomNum < 0.66) {
            compChoice = "Paper";
    } else if (randomNum < 1){
        compChoice = "Scissors";
    }

    console.log(compChoice);

    let result = document.querySelector
    ("#result");
    if (userChoice == compChoise) {
        result.ineerHTML = "Tie";
    }else if (userChoice == "Rock")
        if (compChoice ="Paper"){
            result.ineerHTML = "You lose";
        } else {
            result.ineerHTML = "You won";
        }
}

document.addEventListener('DOMContentLoaded', function(){
     document.querySelector("#rock-button").onclick = game("Rock");
 });

