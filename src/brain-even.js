/**
 * Модуль игры "Проверка на чётность"
 */
import { getRandomNum } from './utils.js';
import startEngine from './engine.js';

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
const isEven = (num) => num % 2 === 0;

/**
 * Основная функция
 * @returns {Object}
 */
const getEvenGameOptions = () => {
  // Получаем рандомное число
  const randNum = getRandomNum(limit.MIN, limit.MAX);

  // Формируем выражение
  const expression = `${randNum}`;

  // Получаем правильный ответ на вопрос
  const answer = isEven(randNum) ? 'yes' : 'no';

  return {
    answer,
    expression,
  };
};

/**
 * Функция запуска игры
 * @returns {undefined}
 */
const startEvenGame = () => startEngine(rule, getEvenGameOptions);

export default startEvenGame;
