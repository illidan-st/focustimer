const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonIncrease = document.querySelector(".increase");
const buttonDecrease = document.querySelector(".decrease");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const buttonDay = document.querySelector(".day");
const buttonNight = document.querySelector(".night");
const bodyLight = document.querySelector(".light");
const volumeControl1 = document.querySelector(".volume-control1");
const volumeControl2 = document.querySelector(".volume-control2");
const volumeControl3 = document.querySelector(".volume-control3");
const volumeControl4 = document.querySelector(".volume-control4");
let minutes = Number(minutesDisplay.textContent);

const buttonForest = document.querySelector("#forest");
const buttonRain = document.querySelector("#rain");
const buttonCafeteria = document.querySelector("#cafeteria");
const buttonFire = document.querySelector("#fire");

const svgForest = document.querySelector(".forest-svgHighlight");
const svgRain = document.querySelector(".rain-svgHighlight");
const svgCafeteria = document.querySelector(".cafeteria-svgHighlight");
const svgFire = document.querySelector(".fire-svgHighlight");

const forestAudio = new Audio("./assets/forest.wav");
const rainAudio = new Audio("./assets/rain.wav");
const cafeteriaAudio = new Audio("./assets/cafeteria.wav");
const fireAudio = new Audio("./assets/fire.wav");

forestAudio.loop = true;
rainAudio.loop = true;
cafeteriaAudio.loop = true;
fireAudio.loop = true;

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    secondsDisplay.textContent = "00";

    if (minutes <= 0) {
      buttonPlay.classList.remove("hide");
      buttonPause.classList.add("hide");
      return;
    }

    if (seconds <= 0) {
      seconds = 60;

      minutesDisplay.textContent = String(minutes - 1).padStart(2, 0);
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, 0);

    countdown();
  }, 1000);
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

buttonDay.addEventListener("click", function () {
  buttonDay.classList.add("hide");
  buttonNight.classList.remove("hide");
  bodyLight.classList.remove("light");
});

buttonNight.addEventListener("click", function () {
  buttonDay.classList.remove("hide");
  buttonNight.classList.add("hide");
  bodyLight.classList.add("light");
});

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener("click", function () {
  resetTimer();
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
});

buttonIncrease.addEventListener("click", function () {
  let minutes = Number(minutesDisplay.textContent);
  minutesDisplay.textContent = String(minutes + 5).padStart(2, 0);

  if (minutes >= 60) {
    minutesDisplay.textContent = "60";
  }
});

buttonDecrease.addEventListener("click", function () {
  let minutes = Number(minutesDisplay.textContent);
  minutesDisplay.textContent = String(minutes - 5).padStart(2, 0);

  if (minutes <= 0) {
    minutesDisplay.textContent = "00";
  }
});

buttonForest.addEventListener("click", function () {
  buttonForest.classList.toggle("button");
  svgForest.classList.toggle("forest-svgHighlight");

  volumeControl1.addEventListener("change", function () {
    forestAudio.volume = this.value;
  });
  return forestAudio.paused ? forestAudio.play() : forestAudio.pause();
});

buttonRain.addEventListener("click", function () {
  buttonRain.classList.toggle("button");
  svgRain.classList.toggle("rain-svgHighlight");

  volumeControl2.addEventListener("change", function () {
    rainAudio.volume = this.value;
  });
  return rainAudio.paused ? rainAudio.play() : rainAudio.pause();
});

buttonCafeteria.addEventListener("click", function () {
  buttonCafeteria.classList.toggle("button");
  svgCafeteria.classList.toggle("cafeteria-svgHighlight");

  volumeControl3.addEventListener("change", function () {
    cafeteriaAudio.volume = this.value;
  });
  return cafeteriaAudio.paused ? cafeteriaAudio.play() : cafeteriaAudio.pause();
});

buttonFire.addEventListener("click", function () {
  buttonFire.classList.toggle("button");
  svgFire.classList.toggle("fire-svgHighlight");

  volumeControl4.addEventListener("change", function () {
    fireAudio.volume = this.value;
  });
  return fireAudio.paused ? fireAudio.play() : fireAudio.pause();
});
