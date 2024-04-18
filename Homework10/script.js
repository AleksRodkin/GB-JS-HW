// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const divContEl = document.querySelector("div.container");

const spawnJokeButton = document.createElement('button');
spawnJokeButton.classList.add('spawn');
spawnJokeButton.innerHTML = "New joke"
divContEl.appendChild(spawnJokeButton);

spawnJokeButton.addEventListener('click', function (e) {
  if (document.querySelector('div.joke__container')){
    document.querySelector('div.joke__container').remove();
  }
  fetchJoke();
});

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((parseResult) => {
    const newDivEl = document.createElement("div");
    newDivEl.classList.add("joke__container");

    const jokeType = document.createElement('p');
    jokeType.innerHTML = `Joke's type: ${parseResult.type}`;
    newDivEl.appendChild(jokeType);

    const separatorLine = document.createElement('div');
    separatorLine.classList.add('separator');
    newDivEl.appendChild(separatorLine);

    const jokeSetup = document.createElement('p');
    jokeSetup.innerHTML = parseResult.setup;
    newDivEl.appendChild(jokeSetup);

    const punchlineButton = document.createElement('button');
    punchlineButton.innerHTML = 'Show answer';
    newDivEl.appendChild(punchlineButton);
    punchlineButton.addEventListener('click', function (e) {
      if (jokePunchline.classList.contains('hidden')) {
        jokePunchline.classList.remove('hidden');
        jokePunchline.classList.add('visible');
        punchlineButton.innerHTML = "Hide answer"
      } else if (jokePunchline.classList.contains('visible')) {
        jokePunchline.classList.remove('visible');
        jokePunchline.classList.add('hidden');
        punchlineButton.innerHTML = "Show answer"
      }
    });

    const jokePunchline = document.createElement('p');
    jokePunchline.classList.add("hidden");
    jokePunchline.innerHTML = parseResult.punchline;
    newDivEl.appendChild(jokePunchline);

    newDivEl.appendChild(separatorLine.cloneNode());

    const jokeId = document.createElement('p');
    jokeId.innerHTML = `Joke's ID: ${parseResult.id}`;
    newDivEl.appendChild(jokeId);

    divContEl.appendChild(newDivEl);
  });
}
