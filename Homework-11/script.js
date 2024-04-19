const data = JSON.parse(DataJS);
const featuredContainer = document.querySelector('div.featuredContainer');
featuredContainer.classList.add('center');

data.forEach(element => {
  const tempEl = document.getElementById("featuredTemplate");
  const clone = tempEl.content.cloneNode(true);

  clone.querySelector('img.featured__img').src = element.imgUrl;
  clone.querySelector('span.featured__title').innerHTML = element.name;
  clone.querySelector('span.featured__text').innerHTML = element.text;
  clone.querySelector('span.featured__price').innerHTML = element.price;

  featuredContainer.appendChild(clone);
});