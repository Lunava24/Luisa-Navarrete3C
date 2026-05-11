/* function time

let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    };
});
 */

let countdown;

function Time(seconds) {
    clearInterval(countdown);
    let timeLeft = seconds;
    updateDisplay(timeLeft);

    countdown = setInterval(() => {
        timeLeft--;
        updateDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alarm.play();
            document.querySelector("h1").innerHTML = "Time's Up!";
        }

    }, 1000);
}

function updateDisplay(seconds) {

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    document.querySelector("h1").innerHTML =
        `${minutes}:${remainingSeconds}`;
}
