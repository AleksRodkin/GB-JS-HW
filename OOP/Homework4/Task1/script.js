// Задача 1:
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

const url1 = "https://jsonplaceholder.typicode.com/users";

const getUserData = async (argUrl) => {
  try {
    const res = await fetch(argUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const userData = await getUserData(url1);
console.log(userData);

const containerEl = document.querySelector("div.container");

userData.forEach((element) => {
  containerEl.insertAdjacentHTML(
    "beforeend",
    `
  <figure class="user">
    <p>ID: ${element.id}</p>
    <p>Name: ${element.name}</p>
    <p>Phone: ${element.phone}</p>
    <p>Username: ${element.username}</p>
    <p>Website: <a href="${element.website}">${element.website}</a></p>
    <p>Email: ${element.email}</p>
    <button class="delete__user">Delete User</button>
  </figure>
  `
  );
});

const deleteButtonEl = document.querySelectorAll(".delete__user");

deleteButtonEl.forEach((button) => {
  button.addEventListener("click", (event) => {
    const userDiv = event.target.closest(".user");
    userDiv.remove();
  });
});