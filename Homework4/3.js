"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

function createArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.trunc(Math.random() * 10));
  }
  return arr;
}

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function findMinInArray(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

function findThrees(array) {
  const foundIndexes = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
      foundIndexes.push(i);
    }
  }
  return foundIndexes;
}

const newArray = createArray(5);
console.log(newArray);
console.log(sumArray(newArray));
console.log(findMinInArray(newArray));
console.log(findThrees(newArray));