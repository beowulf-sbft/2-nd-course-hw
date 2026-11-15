// Игра «Камень, ножницы, бумага»

const RPS_OPTIONS = ['камень', 'ножницы', 'бумага'];

// Каждый вариант побеждает тот, что указан в значении
const RPS_BEATS = {
  камень: 'ножницы',
  ножницы: 'бумага',
  бумага: 'камень',
};

// Случайный выбор компьютера по случайному индексу массива
function getComputerChoice() {
  const index = Math.floor(Math.random() * RPS_OPTIONS.length);
  return RPS_OPTIONS[index];
}

// Результат с точки зрения пользователя: 'победа', 'поражение' или 'ничья'
function getRoundResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'ничья';
  }

  return RPS_BEATS[userChoice] === computerChoice ? 'победа' : 'поражение';
}

// Ввод без учета регистра и лишних пробелов; null — если нажата Cancel
function askUserChoice() {
  const questionText = 'Ваш выбор: камень, ножницы или бумага?';
  let input = prompt(questionText);

  // При некорректном вводе показываем сообщение и задаем тот же вопрос снова
  while (input !== null && !RPS_OPTIONS.includes(input.trim().toLowerCase())) {
    alert('Некорректный ввод. Введите «камень», «ножницы» или «бумага»');
    input = prompt(questionText);
  }

  return input === null ? null : input.trim().toLowerCase();
}

function startRockPaperScissors() {
  const score = { победа: 0, поражение: 0, ничья: 0 };
  let rounds = 0;

  do {
    const userChoice = askUserChoice();

    // Cancel — игра прерывается
    if (userChoice === null) {
      alert('Игра прервана');
      break;
    }

    const computerChoice = getComputerChoice();
    const result = getRoundResult(userChoice, computerChoice);
    score[result]++;
    rounds++;

    alert(
      `Ваш выбор: ${userChoice}\n` +
      `Выбор компьютера: ${computerChoice}\n` +
      `Результат: ${result}!`
    );
  } while (confirm('Сыграть еще раз?'));

  if (rounds > 0) {
    alert(`Победы: ${score.победа}, поражения: ${score.поражение}, ничьи: ${score.ничья}`);
  }
}

const rpsButton = document.querySelector('#rps-start');

if (rpsButton) {
  rpsButton.addEventListener('click', startRockPaperScissors);
}
