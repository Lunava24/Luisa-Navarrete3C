const sounds = {
  a: "sounds/clap.wav",
  s: "sounds/cowbell.wav",
  d: "sounds/hihat.wav",
  f: "sounds/kick.wav",
  g: "sounds/openhat.wav",
  h: "sounds/snare.wav",
  j: "sounds/tom.wav",
  k: "sounds/yuh.wav"
};

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (sounds[key]) {
    const audio = new Audio(sounds[key]);
    audio.play();

    const keyElements = document.querySelectorAll(".key");

    keyElements.forEach((el) => {
      if (el.textContent.toLowerCase() === key) {
        el.classList.add("active");

        setTimeout(() => {
          el.classList.remove("active");
        }, 100);
      }
    });
  }
});
