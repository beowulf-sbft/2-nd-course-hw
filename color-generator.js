// Игра «Генератор случайных цветов»

const LIGHT_TEXT_COLOR = '#ffffff';
const DARK_TEXT_COLOR = '#202027';

// Случайное целое число от 0 до 255 — значение одного канала цвета
function getRandomChannel() {
  return Math.floor(Math.random() * 256);
}

// Канал в виде двух шестнадцатеричных цифр: 5 -> '05', 255 -> 'FF'
function toHex(channel) {
  return channel.toString(16).padStart(2, '0').toUpperCase();
}

// Воспринимаемая яркость цвета (формула YIQ), от 0 до 255
function getBrightness(red, green, blue) {
  return (red * 299 + green * 587 + blue * 114) / 1000;
}

function changeBackgroundColor() {
  const red = getRandomChannel();
  const green = getRandomChannel();
  const blue = getRandomChannel();
  const color = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;

  // На светлом фоне заголовки становятся темными, на темном — белыми
  const textColor = getBrightness(red, green, blue) >= 128 ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR;

  document.body.style.backgroundColor = color;
  document.body.style.setProperty('--page-text-color', textColor);
}

const colorButton = document.querySelector('#color-start');

if (colorButton) {
  colorButton.addEventListener('click', changeBackgroundColor);
}
