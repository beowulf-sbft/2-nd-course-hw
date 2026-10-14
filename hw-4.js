// HW 4: Циклы

// Задание 1. Вывести «Привет» 2 раза
for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

// Задание 2. Цифры от 1 до 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Задание 3. Числа от 7 до 22
for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// Задание 4. Зарплаты сотрудников (for-in)
const obj = {
  'Коля': '200',
  'Вася': '300',
  'Петя': '400',
};

for (const name in obj) {
  console.log(`${name} — зарплата ${obj[name]} долларов`);
}

// Задание 5. Делим 1000 на 2, пока результат не станет меньше 50
let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  num++;
}

console.log(`Результат: ${n}, количество итераций: ${num}`);

// Задание 6. Напоминание об отчете по пятницам (в месяце 31 день)
const firstFriday = 3;
const daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

// Дополнительное задание 1. Вычитаем 7 из 100, пока результат не станет меньше 0
let k = 100;
let iterations = 0;

while (k >= 0) {
  k -= 7;
  iterations++;
}

console.log(`Результат: ${k}, количество итераций: ${iterations}`);

// Дополнительное задание 2. Месяцы и их порядковые номера
const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

for (let i = 0; i < months.length; i++) {
  console.log(`${i + 1} — ${months[i]}`);
}

// Дополнительное задание 3. Все свойства книги
const book = {
  'название': 'Мастер и Маргарита',
  'автор': 'Михаил Булгаков',
  'год издания': 1967,
  'жанр': 'роман',
};

for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}

// Дополнительное задание 4. Минимальное число в массиве из 10 случайных чисел
const numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}

let min = numbers[0];

for (const value of numbers) {
  if (value < min) {
    min = value;
  }
}

console.log('Массив:', numbers);
console.log(`Минимальное число: ${min}`);
