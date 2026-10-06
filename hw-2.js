// HW 2: Variables. Data types

// Task 1
{
  let a = 10;
  alert(a);
  a = 20;
  alert(a);
}

// Task 2: the first iPhone was released in 2007
{
  const iphoneYear = 2007;
  alert(iphoneYear);
}

// Task 3: JavaScript was created by Brendan Eich
{
  const jsCreator = 'Brendan Eich';
  alert(jsCreator);
}

// Task 4
{
  const first = 10;
  const second = 2;
  alert(first + second);
  alert(first - second);
  alert(first * second);
  alert(first / second);
}

// Task 5
{
  const result = 2 ** 5;
  alert(result);
}

// Task 6
{
  const a = 9;
  const b = 2;
  alert(a % b);
}

// Task 7: same 8 lines, rewritten with assignment and increment/decrement operators
{
  let num = 1;
  num += 5;
  num -= 3;
  num *= 7;
  num /= 3;
  num++;
  num--;
  alert(num);
}

// Task 8
{
  const age = prompt('Сколько вам лет?');
  alert(age);
}

// Task 9
{
  const user = {
    name: 'Alexander',
    age: 30,
    isAdmin: false,
  };
  console.log(user);
}

// Task 10
{
  const userName = prompt('Как вас зовут?');
  alert(`Привет, ${userName}!`);
}

// Bonus task
{
  const number = Number(prompt('Загадайте любое число'));

  const doubled = number * 2;
  alert(doubled);

  const plusTen = doubled + 10;
  alert(plusTen);

  const half = plusTen / 2;
  alert(half);

  const difference = half - number;
  alert(difference);

  alert('Ответ равен 5');
}
