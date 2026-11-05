// HW 7: Встроенные объекты

// Задание 1. Строка 'js' в верхнем регистре
function runTask1() {
  console.log('Задание 1');
  const str = 'js';
  console.log(str.toUpperCase());
}

// Задание 2. Элементы массива, начинающиеся с заданной строки (без учета регистра)
function filterByStart(arr, str) {
  const prefix = str.toLowerCase();
  return arr.filter((item) => item.toLowerCase().startsWith(prefix));
}

function runTask2() {
  console.log('Задание 2');
  const words = ['JavaScript', 'java', 'Python', 'json', 'HTML'];
  console.log('Исходный массив:', words);
  console.log('Начинаются с "ja":', filterByStart(words, 'ja'));
  console.log('Начинаются с "J":', filterByStart(words, 'J'));
}

// Задание 3. Округление числа 32.58884
function runTask3() {
  console.log('Задание 3');
  const num = 32.58884;
  console.log(`До меньшего целого: ${Math.floor(num)}`);
  console.log(`До большего целого: ${Math.ceil(num)}`);
  console.log(`До ближайшего целого: ${Math.round(num)}`);
}

// Задание 4. Минимальное и максимальное значения
function runTask4() {
  console.log('Задание 4');
  const numbers = [52, 53, 49, 77, 21, 32];
  console.log(`Минимальное: ${Math.min(...numbers)}`);
  console.log(`Максимальное: ${Math.max(...numbers)}`);
}

// Задание 5. Случайное число от 1 до 10
function logRandom() {
  console.log(Math.floor(Math.random() * 10) + 1);
}

function runTask5() {
  console.log('Задание 5');
  logRandom();
}

// Задание 6. Массив случайных чисел от 0 до n длиной n / 2
function getRandomArray(n) {
  const length = Math.floor(n / 2);
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (n + 1)));
  }

  return result;
}

function runTask6() {
  console.log('Задание 6');
  console.log('getRandomArray(10):', getRandomArray(10));
  console.log('getRandomArray(7):', getRandomArray(7));
}

// Задание 7. Случайное целое число в диапазоне (границы включительно)
function getRandomInRange(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runTask7() {
  console.log('Задание 7');
  console.log('getRandomInRange(5, 15):', getRandomInRange(5, 15));
  console.log('getRandomInRange(20, -5):', getRandomInRange(20, -5));
}

// Задание 8. Текущая дата
function runTask8() {
  console.log('Задание 8');
  console.log(new Date());
}

// Задание 9. Дата через 73 дня после текущей
function runTask9() {
  console.log('Задание 9');
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(futureDate.getDate() + 73);
  console.log('Текущая дата:', currentDate);
  console.log('Через 73 дня:', futureDate);
}

// Задание 10. Дата в формате «Дата: ... — это .... Время: чч:мм:сс»
function formatDate(date) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ];
  const weekdays = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота',
  ];
  const pad = (value) => String(value).padStart(2, '0');

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];
  const time = `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;

  return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${time}`;
}

function runTask10() {
  console.log('Задание 10');
  console.log(formatDate(new Date()));
}

const tasks = [
  runTask1, runTask2, runTask3, runTask4, runTask5,
  runTask6, runTask7, runTask8, runTask9, runTask10,
];

// Запуск при загрузке страницы
tasks.forEach((task) => task());

// Кнопки на странице запускают задания повторно
document.querySelectorAll('[data-task]').forEach((button) => {
  button.addEventListener('click', () => tasks[button.dataset.task - 1]());
});
