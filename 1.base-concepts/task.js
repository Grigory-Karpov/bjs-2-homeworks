"use strict"; // 1. Активируем строгий режим, как требовалось

function solveEquation(a, b, c) {
  let arr = []; // 2. Создаем пустой массив для корней, это результат по умолчанию
  
  // 3. Вычисляем дискриминант по формуле: b^2 - 4ac
  let d = Math.pow(b, 2) - 4 * a * c;

  // 4. Проверяем условия
  if (d < 0) {
    // Если дискриминант меньше нуля, корней нет. 
    // Массив arr так и остается пустым [].
  } else if (d === 0) {
    // Если дискриминант равен нулю, один корень.
    // Формула: -b / (2 * a)
    let root = -b / (2 * a);
    arr.push(root); // Добавляем корень в массив
  } else {
    // Если дискриминант больше нуля, два корня.
    // Формулы: (-b ± √d) / (2 * a)
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2); // Добавляем оба корня в массив
  }

  return arr; // 5. Возвращаем массив с ответом
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  // 1. ПРОВЕРКА ВХОДНЫХ ДАННЫХ
  // Пробуем преобразовать строки в числа (если вдруг пришли строки)
  let p = parseInt(percent);
  let c = parseInt(contribution);
  let a = parseInt(amount);
  let cm = parseInt(countMonths);

  // Если какой-то параметр не является числом (isNaN), возвращаем false
  if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(cm)) {
    return false;
  }

  // 2. ПРЕОБРАЗОВАНИЕ СТАВКИ
  // Процентная ставка (P) = процент / 100 / 12
  let P = p / 100 / 12;

  // 3. ТЕЛО КРЕДИТА (S)
  // Сумма кредита минус первоначальный взнос
  let S = a - c;

  // 4. ЕЖЕМЕСЯЧНЫЙ ПЛАТЕЖ
  // Формула: S * (P + (P / (((1 + P)^n) - 1)))
  // Math.pow((1 + P), cm) — это возведение в степень n (количество месяцев)
  let payment = S * (P + (P / (Math.pow(1 + P, cm) - 1)));

  // 5. ОБЩАЯ СУММА
  // Ежемесячный платеж * количество месяцев
  let totalAmount = payment * cm;

  // 6. ОКРУГЛЕНИЕ
  // toFixed(2) округляет до 2 знаков, но делает это строкой.
  // Number() превращает строку обратно в число.
  // Можно использовать parseFloat, но требование "числовой тип".
  return Number(totalAmount.toFixed(2));
}