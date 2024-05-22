// Задача 2:
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const url2 = "https://dog.ceo/api/breeds/image/random";

const getDogPic = async (argUrl) => {
  try {
    const res = await fetch(argUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const containerEl = document.querySelector("div.container");

const addDogPic = async () => {
  const dogPicUrl = await getDogPic(url2);
  containerEl.insertAdjacentHTML(
    "beforeend",
    `
    <figure>
      <img src="${dogPicUrl.message}" alt="Random Dog">
    </figure>
    `
  );
};

/**
 * 
 * @param {Function} addPic - функция, добавляющая картинку на страницу
 * @param {Number} interval - интервал отображения картинок в миллисекундах
 * @param {Number} limit - лимит количества картинок для отображения
 */
const showDogs = (addPic, interval, limit) => {
  let count = 0;
  const intervalId = setInterval(async () => {
    if (count >= limit) {
      clearInterval(intervalId);
      return;
    }
    await addPic();
    count++;
  }, interval);
};

showDogs(addDogPic, 1000, 10);