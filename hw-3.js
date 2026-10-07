// HW 3: Условное ветвление

// Задание 1. Проверка пароля
const password = 'qwerty123';
const userPassword = prompt('Введите пароль');

if (userPassword === password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
}

// Задание 2. c больше 0 и меньше 10 (логическое И)
const testValues = [0, 10, -3, 2];

for (const c of testValues) {
  if (c > 0 && c < 10) {
    console.log(`c = ${c}: Верно`);
  } else {
    console.log(`c = ${c}: Неверно`);
  }
}

// Задание 3. Одна из переменных больше 100 (логическое ИЛИ)
const d = 50;
const e = 150;

if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Задание 4. Преобразование типов
let a = '2';
let b = '3';
// Код выше изменять нельзя.
alert(Number(a) + Number(b));

// Задание 5. Сезон по номеру месяца (switch)
const monthNumber = 12;

if (monthNumber < 1 || monthNumber > 12) {
  console.log('Такого месяца не существует');
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log('Зима');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Весна');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Лето');
      break;
    default:
      console.log('Осень');
  }
}

// Дополнительное задание 1. Четное или нечетное число
const userInput = prompt('Пожалуйста, введите любое число');
const userNumber = Number(userInput);

// Пустая строка и «Отмена» (null) превращаются в 0, поэтому проверяем их отдельно
if (userInput === null || userInput.trim() === '' || Number.isNaN(userNumber)) {
  alert('Это не число');
} else if (!Number.isInteger(userNumber)) {
  alert('Дробное число не может быть четным или нечетным');
} else if (userNumber % 2 === 0) {
  alert('Число четное');
} else {
  alert('Число нечетное');
}

// Дополнительное задание 2. Ссылка на приложение по ОС (0 — iOS, 1 — Android)
const clientOS = 0;

if (clientOS === 0) {
  console.log('Установите версию приложения для iOS по ссылке');
} else {
  console.log('Установите версию приложения для Android по ссылке');
}

// Дополнительное задание 3. ОС и год выпуска телефона
const clientDeviceYear = 2015;
const osName = clientOS === 0 ? 'iOS' : 'Android';

if (clientDeviceYear < 2015) {
  console.log(`Установите облегченную версию приложения для ${osName} по ссылке`);
} else {
  console.log(`Установите версию приложения для ${osName} по ссылке`);
}
