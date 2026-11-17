// HW 9: Основы работы DOM
// Каждое задание ищет элементы только внутри своего раздела (#task-N),
// поэтому задания 4, 5 и 7 с классом description не мешают друг другу.

// Задание 1. Скрытие и показ текста заголовка
const task1Title = document.querySelector('#task-1 .task-1__title');
const task1Button = document.querySelector('#task-1 .task-1__btn');

task1Button.addEventListener('click', () => {
  // visibility сохраняет место заголовка, поэтому кнопка не смещается
  const isHidden = task1Title.style.visibility === 'hidden';
  task1Title.style.visibility = isHidden ? 'visible' : 'hidden';
  task1Button.textContent = isHidden ? 'Скрыть' : 'Показать';
});

// Задание 2. Изменение цвета текста абзаца
const task2Text = document.querySelector('#task-2 .task-2__text');
const task2Button = document.querySelector('#task-2 .task-2__btn');

task2Button.addEventListener('click', () => {
  task2Text.style.color = 'blue';
});

// Задание 3. Изменение текста заголовка
const task3Title = document.querySelector('#task-3 .task-3__title');
const task3Button = document.querySelector('#task-3 .task-3__btn');

task3Button.addEventListener('click', () => {
  task3Title.textContent = 'Привет, мир!';
});

// Задания 4 и 5. Изменение текста всех элементов с классом description.
// Исходный текст запоминается, чтобы его можно было вернуть кнопкой.
function setupTextChange(taskId, newText) {
  const elements = document.querySelectorAll(`#${taskId} .description`);
  const originalTexts = Array.from(elements, (element) => element.textContent);

  function changeText() {
    elements.forEach((element) => {
      element.textContent = newText;
    });
  }

  function resetText() {
    elements.forEach((element, index) => {
      element.textContent = originalTexts[index];
    });
  }

  document.querySelector(`#${taskId} .${taskId}__run`).addEventListener('click', changeText);
  document.querySelector(`#${taskId} .${taskId}__reset`).addEventListener('click', resetText);

  // Скрипт выполняется сразу при загрузке страницы
  changeText();
}

setupTextChange('task-4', 'Измененный текст');
setupTextChange('task-5', 'Новый текст');

// Задание 6. Добавление нового абзаца в конец документа
const task6Button = document.querySelector('#task-6 .task-6__btn');

task6Button.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Новый абзац';
  document.body.appendChild(paragraph);
});

// Задание 7. Удаление первого абзаца с классом description
const task7Button = document.querySelector('#task-7 .task-7__btn');

task7Button.addEventListener('click', () => {
  const firstDescription = document.querySelector('#task-7 .description');

  if (firstDescription) {
    firstDescription.remove();
  }

  // Когда удалять больше нечего, кнопка становится неактивной
  if (!document.querySelector('#task-7 .description')) {
    task7Button.disabled = true;
  }
});
