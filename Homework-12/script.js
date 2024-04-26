function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds
  );
}
function updateTime() {
  const currentTime = formatTime(videoEl.currentTime);
  const duration = videoEl.duration ? formatTime(videoEl.duration) : "00:00";
  videoTimeEl.textContent = currentTime + " / " + duration;
}

// -------------------------
// Находим контейнер, создаем элементы, добавляем классы/атрибуты
// -------------------------

const containerEl = document.querySelector(".containerVideo");

const containerVideoEl = document.createElement("div");
containerVideoEl.setAttribute("class", "containerForVideo");

const videoEl = document.createElement("video");
videoEl.setAttribute("src", "media/Slipknot-Allegrova-Ugonshitsa.mp4");

const videoAboveControls = document.createElement("div");
videoAboveControls.classList.add("videoAboveControls");

const controlsContainer = document.createElement("div");
controlsContainer.setAttribute("class", "controls");
controlsContainer.classList.add("fade-in");

const playPauseControlsContainer = document.createElement("div");
playPauseControlsContainer.setAttribute("class", "controls__playPauseVolume");

const playEl = document.createElement("div");
playEl.classList.add("play");

const pauseEl = document.createElement("div");
pauseEl.classList.add("pause");

const scrollProgress = document.createElement("input");
scrollProgress.classList.add("range");
scrollProgress.setAttribute("min", "0");
scrollProgress.setAttribute("max", "100");
scrollProgress.setAttribute("type", "range");
scrollProgress.setAttribute("value", "0");

const volumeEl = document.createElement("input");
volumeEl.classList.add("volume");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");

const videoTimeEl = document.createElement("div");
videoTimeEl.classList.add("time");
updateTime();

// -------------------------
// Плей и пауза видео. События
// -------------------------

videoAboveControls.addEventListener("click", function (e) {
  if (videoEl.paused) {
    videoEl.play();
  } else {
    videoEl.pause();
  }
});

playEl.addEventListener("click", function (e) {
  videoEl.play();
});

pauseEl.addEventListener("click", function (e) {
  videoEl.pause();
});

// -------------------------
// Анимации при наведении на видео и отводе курсора
// -------------------------

containerVideoEl.addEventListener("mouseover", function (e) {
  if (videoEl.currentTime > 0 && !videoEl.paused && !videoEl.ended) {
    controlsContainer.classList.remove("fade-out");
    controlsContainer.classList.add("fade-in");
  }
});

containerVideoEl.addEventListener("mouseout", function (e) {
  if (videoEl.currentTime > 0 && !videoEl.paused && !videoEl.ended) {
    controlsContainer.classList.remove("fade-in");
    controlsContainer.classList.add("fade-out");
  }
});

// -------------------------
// Плей, пауза видео с помощью пробела + анимации
// -------------------------

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    if (videoEl.paused) {
      videoEl.play();
      controlsContainer.classList.remove("fade-in");
      controlsContainer.classList.add("fade-out");
    } else {
      videoEl.pause();
      controlsContainer.classList.add("fade-in");
      controlsContainer.classList.remove("fade-out");
    }
  }
});

// -------------------------
// Полоса прокрутки. События
// -------------------------

scrollProgress.addEventListener("input", function (e) {
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});

videoEl.addEventListener("timeupdate", (e) => {
  scrollProgress.value = Math.round(
    (videoEl.currentTime / videoEl.duration) * 100
  );
});

// Старый вариант, но с ним прокрутка перестает работать после клика почему????
// videoEl.addEventListener("timeupdate", (e) => {
//   scrollProgress.setAttribute("value", Math.round((videoEl.currentTime / videoEl.duration) * 100)
//   );
// });

// -------------------------
// Громкость. События
// -------------------------

videoEl.addEventListener("loadeddata", (event) => {
  volumeEl.setAttribute("value", videoEl.volume * 100);
});

volumeEl.addEventListener("input", function (e) {
  videoEl.volume = e.target.value / 100;
});

// -------------------------
// Отображение времени видео. Обновление. События.
// -------------------------

videoEl.addEventListener("timeupdate", updateTime);

// Добавляем всех
containerEl.appendChild(containerVideoEl);
containerVideoEl.appendChild(videoEl);
containerVideoEl.appendChild(videoAboveControls);
containerVideoEl.appendChild(controlsContainer);
controlsContainer.appendChild(scrollProgress);
controlsContainer.appendChild(playPauseControlsContainer);
playPauseControlsContainer.appendChild(playEl);
playPauseControlsContainer.appendChild(pauseEl);
playPauseControlsContainer.appendChild(volumeEl);
playPauseControlsContainer.appendChild(videoTimeEl);
