/**
 * Модуль игры "НОД"
 */
import { showRandomNumber } from '../src/utils.js';

// Вспомогательные переменные
const rule = 'Find the greatest common divisor of given numbers.';
const Limit = {
  LEFT: 5,
  RIGHT: 25,
};

/**
 * Функция расчета НОД
 * @param {string} str
 * @returns {number}
 */
const findGCD = (str) => {
  const [firstValue, secondValue] = str.split(' ');

  /**
   * Функция-рекурсия поиска НОД
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  const iter = (a, b) => {
    const [max, min] = a > b ? [a, b] : [b, a];
    const rem = max % min;
    return rem ? iter(min, rem) : min;
  };

  return iter(firstValue, secondValue);
};

/**
 * Основная функция
 * @returns {Object}
 */
const gcdGame = () => {
  // Получаем рандомные числа
  const randA = showRandomNumber(Limit.LEFT, Limit.RIGHT);
  const randB = showRandomNumber(Limit.LEFT + 5, Limit.RIGHT + 10);

  // Формируем выражение
  const expression = `${randA} ${randB}`;

  // Вычисляем выражение
  const value = findGCD(expression);

  // Получаем правильный ответ на вопрос
  const answer = String(value);

  return {
    rule,
    answer,
    expression,
  };
};

export default gcdGame;
