/**
 * Модуль игры "Калькулятор"
 */
import { showRandomNumber } from '../src/utils.js';

// Вспомогательные переменные
const rule = 'What is the result of the expression?';
const Limit = {
  LEFT: 5,
  RIGHT: 25,
};
const operArr = ['+', '-', '*'];

/**
 * Функция расчета выражения
 * @param {string} str
 * @returns {number|NaN}
 */
const calculateExpr = (str) => {
  const [a, oper, b] = str.split(' ');

  // Выполняем вычисление в зависимости от оператора
  switch (oper) {
    case operArr[0]:
      return +a + +b;
    case operArr[1]:
      return a - b;
    case operArr[2]:
      return a * b;
    default:
      return NaN;
  }
};

/**
 * Основная функция
 * @returns {Object}
 */
const calcGame = () => {
  // Получаем рандомные числа и оператор
  const randA = showRandomNumber(Limit.LEFT, Limit.RIGHT);
  const randB = showRandomNumber(Limit.LEFT, Limit.RIGHT);
  const operator = operArr[showRandomNumber(0, operArr.length - 1)];

  // Формируем выражение
  const expression = `${randA} ${operator} ${randB}`;

  // Вычисляем выражение
  const value = calculateExpr(expression);

  // Получаем правильный ответ на вопрос
  const answer = String(value);

  return {
    rule,
    answer,
    expression,
  };
};

export default calcGame;
