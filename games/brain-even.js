/**
 * Модуль игры "Проверка на чётность"
 */
import { getRandomNum } from '../src/utils.js';
import startEngine from '../src/engine.js';

// Вспомогательные переменные
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const limit = {
  MIN: 5,
  MAX: 25,
};

/**
 * Функция проверки числа на четность
 * @param {number} num
 * @returns {boolean}
 */
const isEven = (num) => !(num % 2) && num > 0;

/**
 * Основная функция
 * @returns {Object}
 */
const evenGame = () => {
  // Получаем рандомное число
  const randNum = getRandomNum(limit.MIN, limit.MAX);

  // Формируем выражение
  const expression = `${randNum}`;

  // Получаем правильный ответ на вопрос
  const answer = isEven(randNum) ? 'yes' : 'no';

  return {
    rule,
    answer,
    expression,
  };
};

/**
 * Функция запуска игры
 * @returns {undefined}
 */
const startEvenGame = () => startEngine(evenGame);

export default startEvenGame;
