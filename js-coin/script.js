// let number = prompt("Enter a numer: ");

// if (number == 0) {
//     console.log("positive number");
// }
//  console.log("nice number");

function clicks() {
    let coin = Math.floor(Math.random() * 2);
    let result = document.getElementById("flips");

    if (coin === 0) {
        result.innerText = 'Heads';
    } else {
        result.innerText = "Tails";
    }
}

