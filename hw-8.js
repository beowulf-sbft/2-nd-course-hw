// HW 8: Callback, setTimeout, setInterval

// Задание 1. Сортировка массива people по возрастанию возраста
function runTask1() {
  console.log('Задание 1');

  const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 },
  ];

  console.log(people.sort((a, b) => a.age - b.age));
}

// Задание 2. Собственная функция filter на основе map
function isPositive(number) {
  return number > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // Элемент попадает в новый массив, только если функция-правило вернула true
    if (ruleFunction(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

function runTask2() {
  console.log('Задание 2');

  console.log(filter([3, -4, 1, 9], isPositive));

  const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' },
  ];

  console.log(filter(people, isMale));
}

// Задание 3. Каждые 3 секунды в течение 30 секунд выводим текущую дату
// onDone вызывается по окончании (используется для кнопки на странице)
function runTask3(onDone) {
  console.log('Задание 3');

  const maxTicks = 10;
  let ticks = 0;

  function logDate() {
    // Не больше 10 дат за 30 секунд, даже если таймеры сработают в одно время
    if (ticks < maxTicks) {
      ticks++;
      console.log(new Date());
    }
  }

  // Первая дата — сразу, затем каждые 3 секунды: 0, 3, 6 ... 27 секунд
  logDate();
  const intervalId = setInterval(logDate, 3000);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');

    if (onDone) {
      onDone();
    }
  }, 30000);
}

// Задание 4. Приветствие выводится через 1 секунду
function runTask4() {
  console.log('Задание 4');

  function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000);
  }

  delayForSecond(function () {
    console.log('Привет, Глеб!');
  });
}

// Задание 5. Исправление порядка вывода сообщений
function runTask5() {
  console.log('Задание 5');

  // Функция delayForSecond через 1 секунду пишет в консоль
  // «Прошла одна секунда», а затем вызывает переданный колбэк
  function delayForSecond(cb) {
    setTimeout(() => {
      console.log('Прошла одна секунда');
      if (cb) { cb(); }
    }, 1000);
  }

  // Функция sayHi выводит в консоль приветствие для указанного имени
  function sayHi(name) {
    console.log(`Привет, ${name}!`);
  }

  // Код выше менять нельзя

  // Было: delayForSecond(sayHi('Глеб')) — sayHi вызывалась сразу,
  // а в delayForSecond передавался ее результат (undefined).
  // Теперь передаем функцию, которая вызовет sayHi('Глеб') внутри delayForSecond.
  delayForSecond(() => sayHi('Глеб'));
}

// Кнопка задания 3 блокируется, пока идет 30-секундный таймер,
// чтобы повторное нажатие не запускало параллельные интервалы
function startTask3() {
  const button = document.querySelector('[data-task="3"]');

  if (button) {
    button.disabled = true;
  }

  runTask3(() => {
    if (button) {
      button.disabled = false;
    }
  });
}

const tasks = [runTask1, runTask2, startTask3, runTask4, runTask5];

// Запуск при загрузке страницы по очереди, чтобы вывод заданий не перемешивался:
// задания 1 и 2 сразу, затем 4 и 5 (каждое занимает 1 секунду), затем 3 (30 секунд)
runTask1();
runTask2();
runTask4();
setTimeout(runTask5, 1500);
setTimeout(startTask3, 3000);

// Кнопки на странице запускают задания повторно
document.querySelectorAll('[data-task]').forEach((button) => {
  button.addEventListener('click', () => tasks[button.dataset.task - 1]());
});
