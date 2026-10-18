// HW 5: Функции

// Вспомогательная функция: превращает ввод в число.
// Пустая строка, Cancel (null) и нечисловой текст считаются некорректными — возвращается NaN.
function toNumber(value) {
  if (value === null || String(value).trim() === '') {
    return NaN;
  }

  return Number(value);
}

// Задание 1. Меньшее из двух чисел
function getMin(a, b) {
  if (a < b) {
    return a;
  }

  return b;
}

function runTask1() {
  console.log('Задание 1');
  console.log(`getMin(8, 4) = ${getMin(8, 4)}`);
  console.log(`getMin(6, 6) = ${getMin(6, 6)}`);
}

// Задание 2. Четное или нечетное число
function checkParity(n) {
  if (n % 2 == 0) {
    return 'Число четное';
  }

  return 'Число нечетное';
}

function runTask2() {
  console.log('Задание 2');
  console.log(`7: ${checkParity(7)}`);
  console.log(`10: ${checkParity(10)}`);
}

// Задание 3.1. Выводит квадрат числа в консоль
function logSquare(n) {
  console.log(n * n);
}

// Задание 3.2. Возвращает квадрат числа
function getSquare(n) {
  return n * n;
}

function runTask3() {
  console.log('Задание 3');
  logSquare(5);
  const square = getSquare(3);
  console.log(`getSquare(3) = ${square}, getSquare(3) + 1 = ${square + 1}`);
}

// Задание 4. Приветствие по возрасту
function correctAge(age) {
  const value = toNumber(age);

  if (isNaN(value) || value < 0) {
    return 'Вы ввели неправильное значение';
  } else if (value < 13) {
    return 'Привет, друг!';
  } else {
    return 'Добро пожаловать!';
  }
}

function runTask4() {
  alert(correctAge(prompt('Сколько вам лет?')));
}

// Задание 5. Произведение двух чисел с проверкой
function multiply(a, b) {
  const x = toNumber(a);
  const y = toNumber(b);

  if (isNaN(x) || isNaN(y)) {
    return 'Одно или оба значения не являются числом';
  }

  return x * y;
}

function runTask5() {
  console.log('Задание 5');
  console.log(`multiply(3, 4) = ${multiply(3, 4)}`);
  console.log(`multiply('5', 2) = ${multiply('5', 2)}`);
  console.log(`multiply('abc', 2) = ${multiply('abc', 2)}`);
}

// Задание 6. Куб числа
// Без аргумента функция запрашивает число через prompt; с аргументом — использует его (для проверки от 0 до 10).
function getCube(input) {
  const raw = input === undefined ? prompt('Введите число') : input;
  const n = toNumber(raw);

  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  }

  return `${n} в кубе равняется ${n ** 3}`;
}

function runTask6() {
  alert(getCube());
}

function testTask6() {
  console.log('Задание 6: проверка с числами от 0 до 10');
  for (let i = 0; i <= 10; i++) {
    console.log(getCube(i));
  }
}

// Задание 7. Объекты-круги
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

function runTask7() {
  console.log('Задание 7');
  for (const circle of [circle1, circle2]) {
    console.log(
      `Радиус ${circle.radius}: площадь ${circle.getArea().toFixed(2)}, ` +
      `периметр ${circle.getPerimeter().toFixed(2)}`
    );
  }
}

// Запуск при загрузке страницы
runTask1();
runTask2();
runTask3();
runTask4();
runTask5();
runTask6();
testTask6();
runTask7();

// Кнопки на странице запускают задания повторно
const tasks = {
  1: runTask1,
  2: runTask2,
  3: runTask3,
  4: runTask4,
  5: runTask5,
  6: () => {
    runTask6();
    testTask6();
  },
  7: runTask7,
};

document.querySelectorAll('[data-task]').forEach((button) => {
  button.addEventListener('click', () => tasks[button.dataset.task]());
});
