// HW 6: Массивы

// Случайное целое число в диапазоне от min до max включительно
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание 1. Выводим элементы до значения 10 включительно
function runTask1() {
  console.log('Задание 1');
  const arr = [1, 5, 4, 10, 0, 3];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] === 10) {
      break;
    }
  }
}

// Задание 2. Индекс значения 4
function runTask2() {
  console.log('Задание 2');
  const arr = [1, 5, 4, 10, 0, 3];
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      index = i;
      break;
    }
  }

  console.log(`Индекс значения 4: ${index}`);
  console.log(`Проверка через indexOf: ${arr.indexOf(4)}`);
}

// Задание 3. Элементы массива через пробел
function runTask3() {
  console.log('Задание 3');
  const arr = [1, 3, 5, 10, 20];
  console.log(arr.join(' '));
}

// Задание 4. Многомерный массив вложенными циклами
function runTask4() {
  console.log('Задание 4');
  const matrix = [];

  for (let i = 0; i < 3; i++) {
    const row = [];

    for (let j = 0; j < 3; j++) {
      row.push(1);
    }

    matrix.push(row);
  }

  console.log(matrix);
}

// Задание 5. Добавляем в конец массива 2, 2, 2
function runTask5() {
  console.log('Задание 5');
  const arr = [1, 1, 1];
  arr.push(2, 2, 2);
  console.log(arr);
}

// Задание 6. Сортируем массив и удаляем букву 'a'
function runTask6() {
  console.log('Задание 6');
  const arr = [9, 8, 7, 'a', 6, 5];
  // sort() без функции сравнения сравнивает элементы как строки;
  // здесь это безопасно, так как все числа однозначные
  arr.sort();
  const result = arr.filter((item) => item !== 'a');
  console.log(result);
}

// Задание 7. Угадай число
function runTask7() {
  const arr = [9, 8, 7, 6, 5];
  const answer = prompt('Угадайте число');
  // Пустой ввод, Cancel и нечисловой текст считаются неверным ответом
  const guess = answer === null || answer.trim() === '' ? NaN : Number(answer);

  if (arr.includes(guess)) {
    alert('Угадал');
  } else {
    alert('Не угадал');
  }
}

// Задание 8. Строка в обратном порядке
function runTask8() {
  console.log('Задание 8');
  const str = 'abcdef';
  console.log(str.split('').reverse().join(''));
}

// Задание 9. Объединяем вложенные массивы
function runTask9() {
  console.log('Задание 9');
  const arr = [[1, 2, 3], [4, 5, 6]];
  console.log([...arr[0], ...arr[1]]);
}

// Задание 10. Сумма текущего и следующего элементов
function runTask10() {
  console.log('Задание 10');
  const arr = [];

  for (let i = 0; i < 8; i++) {
    arr.push(getRandomInt(1, 10));
  }

  console.log('Массив:', arr);

  // У последнего элемента нет следующего, поэтому цикл идет до length - 1
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(`${arr[i]} + ${arr[i + 1]} = ${arr[i] + arr[i + 1]}`);
  }
}

// Задание 11. Квадраты чисел
function getSquares(numbers) {
  return numbers.map((n) => n * n);
}

function runTask11() {
  console.log('Задание 11');
  console.log(getSquares([1, 2, 3, -4, 5]));
}

// Задание 12. Длины слов
function getWordLengths(words) {
  return words.map((word) => word.length);
}

function runTask12() {
  console.log('Задание 12');
  console.log(getWordLengths(['яблоко', 'кот', 'JavaScript', 'массив']));
}

// Задание 13. Только отрицательные значения
function getNegatives(numbers) {
  return numbers.filter((n) => n < 0);
}

function runTask13() {
  console.log('Задание 13');
  console.log(getNegatives([3, -1, 0, -7, 12, -5]));
}

// Задание 14. Четные значения из 10 случайных чисел (0–10)
function runTask14() {
  console.log('Задание 14');
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(getRandomInt(0, 10));
  }

  const evens = arr.filter((n) => n % 2 === 0);
  console.log('Исходный массив:', arr);
  console.log('Четные значения:', evens);
}

// Задание 15. Среднее арифметическое 6 случайных чисел (1–10)
function runTask15() {
  console.log('Задание 15');
  const arr = [];

  for (let i = 0; i < 6; i++) {
    arr.push(getRandomInt(1, 10));
  }

  const average = arr.reduce((sum, n) => sum + n, 0) / arr.length;
  const evens = arr.filter((n) => n % 2 === 0);
  console.log('Исходный массив:', arr);
  console.log(`Среднее арифметическое: ${average.toFixed(2)}`);
  console.log('Четные значения:', evens);
}

const tasks = [
  runTask1, runTask2, runTask3, runTask4, runTask5,
  runTask6, runTask7, runTask8, runTask9, runTask10,
  runTask11, runTask12, runTask13, runTask14, runTask15,
];

// Запуск при загрузке страницы
tasks.forEach((task) => task());

// Кнопки на странице запускают задания повторно
document.querySelectorAll('[data-task]').forEach((button) => {
  button.addEventListener('click', () => tasks[button.dataset.task - 1]());
});
