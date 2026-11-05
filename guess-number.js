// Игра «Угадай число»

const GUESS_MIN = 1;
const GUESS_MAX = 100;

// Ввод корректен, если это целое число от GUESS_MIN до GUESS_MAX
function isValidGuess(input) {
  const value = input.trim();

  if (!/^\d+$/.test(value)) {
    return false;
  }

  const number = Number(value);
  return number >= GUESS_MIN && number <= GUESS_MAX;
}

function startGuessNumber() {
  const secretNumber = Math.floor(Math.random() * GUESS_MAX) + GUESS_MIN;
  const questionText = `Угадайте число от ${GUESS_MIN} до ${GUESS_MAX}:`;
  let attempts = 0;

  while (true) {
    let input = prompt(questionText);

    // При некорректном вводе показываем сообщение и задаем тот же вопрос снова
    while (input !== null && !isValidGuess(input)) {
      alert(`Некорректный ввод. Введите целое число от ${GUESS_MIN} до ${GUESS_MAX}`);
      input = prompt(questionText);
    }

    // Cancel — игра прерывается
    if (input === null) {
      alert('Игра прервана');
      return;
    }

    attempts++;
    const guess = Number(input);

    if (guess === secretNumber) {
      alert(`Угадал! Это число ${secretNumber}. Попыток: ${attempts}`);
      return;
    }

    alert(guess < secretNumber ? 'Загаданное число больше' : 'Загаданное число меньше');
  }
}

const guessButton = document.querySelector('#guess-start');

if (guessButton) {
  guessButton.addEventListener('click', startGuessNumber);
}
