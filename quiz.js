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

function startQuiz() {
  let correctCount = 0;

  for (const item of quiz) {
    const answer = prompt(`${item.question}\n\n${item.options.join('\n')}\n\nВведите номер ответа:`);

    // Cancel — игра прерывается
    if (answer === null) {
      alert('Викторина прервана');
      return;
    }

    // Пустой или нечисловой ответ считается неправильным
    if (answer.trim() !== '' && Number(answer) === item.correctAnswer) {
      correctCount++;
    }
  }

  alert(`Правильных ответов: ${correctCount} из ${quiz.length}`);
}

const quizButton = document.querySelector('#quiz-start');

if (quizButton) {
  quizButton.addEventListener('click', startQuiz);
}
