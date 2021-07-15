/**
 * Модуль игры "НОД"
 */
import { getRandomNum } from '../src/utils.js';
import startEngine from '../src/engine.js';

// Вспомогательные переменные
const rule = 'Find the greatest common divisor of given numbers.';
const limit = {
  MIN: 5,
  MAX: 25,
};

/**
 * Функция расчета НОД двух чисел
 * @param {number} firstNum
 * @param {number} secondNum
 * @returns {number}
 */
const getGCD = (firstNum, secondNum) => {
  /**
   * Функция-рекурсия поиска НОД двух чисел
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  const iter = (a, b) => {
    const [max, min] = a > b ? [a, b] : [b, a];
    const rem = max % min;
    return rem ? iter(min, rem) : min;
  };

  return iter(firstNum, secondNum);
};

/**
 * Основная функция
 * @returns {Object}
 */
const getGcdGameOptions = () => {
  // Получаем рандомные числа
  const randA = getRandomNum(limit.MIN, limit.MAX);
  const randB = getRandomNum(limit.MIN, limit.MAX);

  // Формируем выражение
  const expression = `${randA} ${randB}`;

  // Вычисляем выражение
  const value = getGCD(randA, randB);

  // Получаем правильный ответ на вопрос
  const answer = String(value);

  return {
    answer,
    expression,
  };
};

/**
 * Функция запуска игры
 * @returns {undefined}
 */
const startGcdGame = () => startEngine(rule, getGcdGameOptions);

export default startGcdGame;
