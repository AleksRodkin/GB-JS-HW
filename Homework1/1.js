"use strict";

/*
Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.
*/

alert(
  "Задание 1. Данная программа принимает от пользователя значение градусов по Цельсию и выводит это значение в градусах по Фаренгейту"
);

const celsius = +prompt("Введите температуру в градусах по Цельсию: ");

const fahrenheit = (9 / 5) * celsius + 32;

alert(`Цельсий: ${celsius}, Фаренгейт: ${fahrenheit}`);
