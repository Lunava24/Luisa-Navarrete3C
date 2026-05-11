const form = document.getElementById("greetForm");
const output = document.getElementById("outputBox");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const userName = document.getElementById("nameInput").value;

  const currentDate = new Date();

  const hour = currentDate.getHours();
  const day = currentDate.getDay();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  document.getElementById("message").innerHTML =
    `${greeting}, ${userName}!`;

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  document.getElementById("today").innerHTML =
    `Today is ${weekDays[day]}`;

  let extraMessage = "";

  if (day === 5) {
    extraMessage = "TGIF";
  }
  else if (day === 0 || day === 6) {
    extraMessage = "Enjoy your weekend";
  }
  else {
    extraMessage = "Keep going, weekend is coming!";
  }

  document.getElementById("status").innerHTML = extraMessage;

  output.style.display = "block";
});
