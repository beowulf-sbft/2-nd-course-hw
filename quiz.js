// Игра «Викторина»

// Массив вопросов и правильных ответов
const quiz = [
  {
    question: 'Какой цвет небо?',
    options: ['1. Красный', '2. Синий', '3. Зеленый'],
    correctAnswer: 2, // номер правильного ответа
  },
  {
    question: 'Сколько дней в неделе?',
    options: ['1. Шесть', '2. Семь', '3. Восемь'],
    correctAnswer: 2,
  },
  {
    question: 'Сколько у человека пальцев на одной руке?',
    options: ['1. Четыре', '2. Пять', '3. Шесть'],
    correctAnswer: 2,
  },
];

// Ответ корректен, если это целое число от 1 до количества вариантов
function isValidAnswer(answer, optionsCount) {
  const value = answer.trim();

  if (!/^\d+$/.test(value)) {
    return false;
  }

  const number = Number(value);
  return number >= 1 && number <= optionsCount;
}

function startQuiz() {
  let correctCount = 0;

  for (const item of quiz) {
    const questionText = `${item.question}\n\n${item.options.join('\n')}\n\nВведите номер ответа:`;
    let answer = prompt(questionText);

    // При некорректном вводе показываем сообщение и задаем тот же вопрос снова
    while (answer !== null && !isValidAnswer(answer, item.options.length)) {
      alert(`Некорректный ввод. Введите номер ответа от 1 до ${item.options.length}`);
      answer = prompt(questionText);
    }

    // Cancel — игра прерывается
    if (answer === null) {
      alert('Викторина прервана');
      return;
    }

    if (Number(answer) === item.correctAnswer) {
      correctCount++;
    }
  }

  alert(`Правильных ответов: ${correctCount} из ${quiz.length}`);
}

const quizButton = document.querySelector('#quiz-start');

if (quizButton) {
  quizButton.addEventListener('click', startQuiz);
}
