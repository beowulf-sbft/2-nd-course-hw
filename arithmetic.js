// Игра «Простая арифметика»

// Случайное целое число от min до max включительно
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерирует задачу так, чтобы ответ всегда был целым и неотрицательным
function createProblem() {
  const operators = ['+', '-', '*', '/'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  let a;
  let b;
  let answer;

  switch (operator) {
    case '+':
      a = getRandomNumber(1, 50);
      b = getRandomNumber(1, 50);
      answer = a + b;
      break;
    case '-':
      a = getRandomNumber(1, 50);
      b = getRandomNumber(1, a);
      answer = a - b;
      break;
    case '*':
      a = getRandomNumber(1, 10);
      b = getRandomNumber(1, 10);
      answer = a * b;
      break;
    default:
      // Деление без остатка: делимое = делитель * ответ
      b = getRandomNumber(1, 10);
      answer = getRandomNumber(1, 10);
      a = b * answer;
  }

  return { text: `${a} ${operator} ${b}`, answer };
}

// Ответ корректен, если это целое число (допускается знак минус)
function isValidNumber(input) {
  return /^-?\d+$/.test(input.trim());
}

function startArithmetic() {
  let solved = 0;
  let correct = 0;

  do {
    const problem = createProblem();
    const questionText = `Решите задачу: ${problem.text} = ?`;
    let input = prompt(questionText);

    // При некорректном вводе показываем сообщение и задаем тот же вопрос снова
    while (input !== null && !isValidNumber(input)) {
      alert('Некорректный ввод. Введите целое число');
      input = prompt(questionText);
    }

    // Cancel — игра прерывается
    if (input === null) {
      alert('Игра прервана');
      break;
    }

    solved++;

    if (Number(input) === problem.answer) {
      correct++;
      alert('Верно!');
    } else {
      alert(`Ошибка. Правильный ответ: ${problem.answer}`);
    }
  } while (confirm('Решить еще одну задачу?'));

  if (solved > 0) {
    alert(`Решено верно: ${correct} из ${solved}`);
  }
}

const arithmeticButton = document.querySelector('#arithmetic-start');

if (arithmeticButton) {
  arithmeticButton.addEventListener('click', startArithmetic);
}
