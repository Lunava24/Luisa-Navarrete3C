// let number = prompt("Enter a numer: ");

// if (number == 0) {
//     console.log("positive number");
// }
//  console.log("nice number");
let userSelection = null;

function tail() {
    userSelection = "Tails";
}

function head() {
    userSelection = "Head";
}

function clicks() {
    let coin = Math.floor(Math.random() * 2);
    let result = document.getElementById("flips");

    if (coin === 0) {
        result.innerText = 'Heads'; if (userSelection === "Head") {
            alert("You won :DDDDDDDDDDD");
            userSelection = null;
        }   else {
            alert("You lost ;v")
            userSelection = null;
        }

    } else {
        result.innerText = "Tails"; if (userSelection === "Tails") {
            alert("You won");
            userSelection = null;
        }   else {
            alert("You lost ;v")
            userSelection = null;
        }
    }
}

