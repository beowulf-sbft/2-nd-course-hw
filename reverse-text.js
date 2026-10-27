// Игра «Переверни текст»

function startReverseText() {
  const questionText = 'Введите текст:';
  let input = prompt(questionText);

  // Пустой ввод — показываем сообщение и задаем тот же вопрос снова
  while (input !== null && input.trim() === '') {
    alert('Некорректный ввод. Введите непустой текст');
    input = prompt(questionText);
  }

  // Cancel — игра прерывается
  if (input === null) {
    alert('Игра прервана');
    return;
  }

  // Array.from корректно разбивает строку на символы, включая эмодзи
  const reversed = Array.from(input).reverse().join('');
  alert(`Перевернутый текст: ${reversed}`);
}

const reverseButton = document.querySelector('#reverse-start');

if (reverseButton) {
  reverseButton.addEventListener('click', startReverseText);
}
