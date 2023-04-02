const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let intervalID = setInterval(heartTimerAnimation, 1000);
    heartTimerAnimation(); // сразу вызываем функцию отображения, чтобы было без задержки

    // При повторном запуске прекращаем выполнение предыдущего таймера
    buttonEl.addEventListener("click", () => {
      clearInterval(intervalID);
    });

    // реализуем сам таймер
    function heartTimerAnimation() {
      if (seconds === 0) {
        clearInterval(intervalID); // останавливаем setInterval
      }
      console.log("work");
      hours = Math.floor(seconds / 3600);
      minutes = Math.floor((seconds - hours * 3600) / 60);
      secondsForTimer = seconds % 60;
      timerEl.innerText = `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${secondsForTimer < 10 ? "0" + secondsForTimer : secondsForTimer}`;
      seconds--;
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/[^0-9\.]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = "";
});
