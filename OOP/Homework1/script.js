/* 1) Дан массив */ const arr = [1, 5, 7, 9] /* с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки */

console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(startNumber) {
  return {
    value: startNumber,
    increment() {
      return (this.value += 1);
    },
    decrement() {
      return (this.value -= 1);
    },
  };
}

const someNumber = createCounter(10);
console.log(someNumber.decrement());
console.log(someNumber.decrement());
console.log(someNumber.increment());
console.log(someNumber.increment());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const rootElement = document.getElementById("root");
const divEl = document.createElement("div");
divEl.classList.add("container");
const divChildEl = document.createElement("div");
divChildEl.classList.add("next-container");
const newTextEl = document.createElement("p");
newTextEl.classList.add("my-class");

rootElement.appendChild(divEl);
divEl.appendChild(divChildEl);
divChildEl.appendChild(newTextEl);

function findElementByClass(elem, targetClass) {
  if (elem.classList?.contains(targetClass)) {
    return elem;
  }
  return findElementByClass(elem.childNodes[0], targetClass);
}

const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
